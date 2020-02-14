import CommunityModel, { ICommunity } from "../models/community-model";
import mongoose, { ClientSession } from "mongoose";
import CommunityMemberModel from "../models/community-member-model";
import { Pagination } from "../types";


interface CreateCommnunity {
  name: string;
  slug: string;
  description: string;
  coverPhoto: string;
  avatarPhoto: string;
  isPublic: boolean;
}

export async function getCommunities(search?: string, userID?: string, p?: Pagination): Promise<ICommunity[]> {
  let limit = p?.pageSize || 10;
  if (limit > 24) {
    limit = 24;
  }
  const offset = (p?.page || 0) * limit;

  let query = CommunityModel.aggregate([]);

  if (search) {
    query = query.match({ $text: { $search: search } })
  }

  if (userID) { // allow search communites that user joined and all public one
    query = query.lookup({ // join to get current member
      from: 'communityMembers',
      let: { userID: userID, communityID: "$_id" },
      pipeline: [
        {
          $match: {
            $expr: {
              $and: [
                { $eq: ["$user", "$$userID"] },
                { $eq: ["$status", "approved"] },
                { $eq: ["$community", "$$communityID"] }
              ]
            }
          }
        },
        { $project: { createdAt: 0, updatedAt: 0, role: 0 } }
      ],
      as: 'users'
    }).match({ $or: [{ isPublic: true }, { users: { $size: 1 } }] })
  } else { // allow search public communities only
    query = query.match({ isPublic: true })
  }

  // order / sorting
  if (search) { // fulltext search provide addtional score meta data
    query = query.sort({ score: { $meta: "textScore" }, "createdAt": 1 })
  } else {
    query = query.sort({ "createdAt": 1 })
  }

  return query.skip(offset).limit(limit).exec();
}

export async function createCommunity(form: CreateCommnunity, userID: string): Promise<ICommunity> {
  let tx: ClientSession | undefined
  try {
    tx = await mongoose.startSession();
    await tx.startTransaction();

    let com = new CommunityModel({ ...form })
    com = await com.save({ session: tx })

    const comMem = new CommunityMemberModel({ user: userID, community: com._id, role: 'owner' })
    await comMem.save({ session: tx })

    await tx.commitTransaction()

    return com;
  } catch (err) {
    await tx?.abortTransaction()
    throw err
  } finally {
    tx?.endSession()
  }
}

export async function getCommunity(id: string, userID?: string): Promise<ICommunity> {
  try {
    const com = await CommunityModel.findOne({ _id: id })
    if (!com || (!com.isPublic && !userID)) {
      throw new Error("Community not found!")
    }
    if (!com.isPublic) {
      const cMem = await CommunityMemberModel.findOne({ user: userID, community: com._id, status: { $ne: 'blocked' } })
      if (!cMem) {
        throw new Error("You dont have permission to view this community!")
      }
    }
    return com
  } catch (err) {
    throw err;
  }
}


export async function updateCommunity(id: string, form: CreateCommnunity, userID: string): Promise<ICommunity> {
  let tx: ClientSession | undefined
  try {
    tx = await mongoose.startSession();
    await tx.startTransaction();

    // only owner can update community
    const cMem = await CommunityMemberModel.findOne({ user: userID, community: id, role: { $eq: 'owner' } }).session(tx)
    if (!cMem) {
      throw new Error("You dont have permission to update this community")
    }

    const com = await CommunityModel.findOne({ _id: id }).session(tx)
    if (!com) {
      throw new Error("Community not found!")
    }

    if (form.name && form.name !== com.name) {
      com.name = form.name
    }
    if (form.description && form.description !== com.description) {
      com.description = form.description
    }
    if (form.avatarPhoto && form.avatarPhoto !== com.avatarPhoto) {
      com.avatarPhoto = form.avatarPhoto
    }
    if (form.coverPhoto && form.coverPhoto !== com.coverPhoto) {
      com.coverPhoto = form.coverPhoto
    }
    if (form.isPublic && form.isPublic !== com.isPublic) {
      com.isPublic = form.isPublic
    }

    const updatedCom = await com.save({ session: tx })

    await tx.commitTransaction()

    return updatedCom;
  } catch (err) {
    await tx?.abortTransaction()
    throw err
  } finally {
    tx?.endSession()
  }
}