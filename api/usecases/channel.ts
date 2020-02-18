import ChannelModel, { IChannel } from "../models/channel-model";
import userModel, { IUser } from "../models/user-model";
import { Pagination } from "../types";
import ChannelMemberModel from "../models/channel-member-model";
import mongoose, { ClientSession } from "mongoose";
import { ErrChannelNotFound } from "./errors";

export interface ChannelForm {
  community: string;
  name: string;
  slug: string;
  isPublic: boolean;
  description: string;
  coverPhoto: string;
  avatarPhoto: string;
}


export async function getChannelsByCommunityID(cid: string): Promise<Array<IChannel>> {
  return ChannelModel.find({ community: cid })
}

export async function getChannelID(id: string, uid?: string): Promise<IChannel> {
  try {
    const chan = await ChannelModel.findById(id)
    if (!chan) {
      throw ErrChannelNotFound
    }

    if (!chan.isPublic) {
      const chanMem = await ChannelMemberModel.findOne({ channel: chan._id, user: uid, status: 'approved' })
      if (!chanMem) {
        throw ErrChannelNotFound
      }
    }

    return chan;
  } catch (err) {
    throw err;
  }
}

export async function getChannelMembers(cid: string, p?: Pagination): Promise<Array<IUser>> {
  try {
    const chan = await ChannelModel.findById(cid)
    if (!chan) {
      throw ErrChannelNotFound
    }

    let query = userModel.aggregate([])
    if (chan.isPublic) {
      query = userModel.aggregate([
        {
          $lookup: {
            from: 'communityMembers',
            let: { userID: "$_id", communityID: cid },
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
            as: 'communityRelations'
          }
        },
        { $match: { "chanMemRelations.0": { $exists: true } } }
      ])

    } else {
      query = userModel.aggregate([
        {
          $lookup: {
            from: 'channelMembers',
            let: { userID: "$_id", channelID: cid },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$user", "$$userID"] },
                      { $eq: ["$status", "approved"] },
                      { $eq: ["$channel", "$$channelID"] }
                    ]
                  }
                }
              },
              { $project: { createdAt: 0, role: 0 } }
            ],
            as: 'chanMemRelations'
          }
        },
        { $match: { "chanMemRelations.0": { $exists: true } } }
      ])
    }

    const limit = p?.pageSize || 50
    const offset = (p?.page || 0) * limit

    return query.sort({ 'chanMemRelations.0.createdAt': 1 }).skip(offset).limit(limit)

  } catch (err) {
    throw err
  }
}

export async function createChannel(form: ChannelForm, userID?: string): Promise<IChannel> {
  let tx: ClientSession | undefined
  try {
    tx = await mongoose.startSession();
    tx.startTransaction();

    let chan = new ChannelModel({ ...form })
    chan = await chan.save({ session: tx })

    if (!chan.isPublic) {
      const comMem = new ChannelMemberModel({
        user: userID,
        channel: chan._id,
        role: 'moderator',
        status: 'approved'
      })
      await comMem.save({ session: tx })
    }

    await tx.commitTransaction()

    return chan;
  } catch (err) {
    await tx?.abortTransaction()
    throw err
  } finally {
    tx?.endSession()
  }
}
