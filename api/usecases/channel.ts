import ChannelModel, { IChannel } from "../models/channel-model";

export async function getChannelsByCommunityID(cid: string): Promise<Array<IChannel>> {
  try {
    return ChannelModel.find({ community: cid })
  } catch (err) {
    throw err
  }
}