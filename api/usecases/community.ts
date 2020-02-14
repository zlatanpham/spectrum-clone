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

  if (userID) {
    query = query.lookup({
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
    })
  }

  if (search) {
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