import PostModel, { IPost } from "../models/post-model";
import { Pagination } from "../types";
import ReactionModel from "../models/\breaction-model";
import ChannelModel from "../models/channel-model";
import { ErrChannelNotFound, ErrUserNotFound, ErrPostNotFound } from "./errors";
import UserModel from "../models/user-model";


export interface PostForm {
  title: string;
  content: string;
  allowDiscussion: boolean;
  isPinned: boolean;
  author: string;
  channel: string;
}

export async function getPostsByChannelID(cid: string, search?: string, p?: Pagination): Promise<Array<IPost>> {
  try {
    const limit = p?.pageSize || 25;
    const offset = (p?.page || 0) * limit
    let query = PostModel.find({ channel: cid }).sort({ isPinned: 1, updatedAt: -1 })
    if (search) {
      query = PostModel.find({ channel: cid, $text: { $search: search } })
        .sort({ score: { $meta: "textScore" }, isPinned: 1, updatedAt: -1 })
    }
    return query.skip(offset).limit(limit)
  } catch (err) {
    throw err
  }
}

export async function getPostByUserID(uid: string, p?: Pagination): Promise<Array<IPost>> {
  try {
    const limit = p?.pageSize || 25;
    const offset = (p?.page || 0) * limit
    return PostModel.find({ author: uid })
      .sort({ updatedAt: -1 })
      .skip(offset)
      .limit(limit)
  } catch (err) {
    throw err
  }
}

export async function getPostByID(id: string): Promise<IPost> {
  try {
    const p = await PostModel.findById(id)
    if (!p) {
      throw ErrPostNotFound
    }
    return p
  } catch (err) {
    throw err
  }
}

export async function updatePost(id: string, post: PostForm): Promise<IPost> {
  try {
    const p = await PostModel.findById(id)
    if (!p) {
      throw ErrPostNotFound
    }

    if (p.title && p.title !== post.title) {
      post.title = p.title
    }

    if (p.allowDiscussion !== post.allowDiscussion) {
      post.allowDiscussion = p.allowDiscussion
    }

    if (p.content && p.content !== post.content) {
      post.content = p.content
    }
    if (p.isPinned !== post.isPinned) {
      post.isPinned = p.isPinned
    }

    return await p.save()
  } catch (err) {
    throw err
  }
}

export async function getPostReactionCount(id: string): Promise<number> {
  return ReactionModel.count({ post: id })
}


export async function createNewPost(post: PostForm): Promise<IPost> {
  try {
    const chan = await ChannelModel.findById(post.channel)
    if (!chan) {
      throw ErrChannelNotFound
    }

    const user = await UserModel.findById(post.author)
    if (!user) {
      throw ErrUserNotFound
    }

    const p = new PostModel({ ...post, channel: chan?._id, user: user._id })
    return p.save()
  } catch (err) {
    throw err
  }
}
