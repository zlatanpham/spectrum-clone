import { Pagination } from "../types";
import MessageModel from "../models/message-model";
import PostModel from "../models/post-model";
import {
  ErrPostNotFound,
  ErrUserNotFound,
  ErrMessageNotFound,
  ErrYouAreNotAllowed
} from "./errors";
import UserModel from "../models/user-model";

export interface MessageForm {
  content: string;
  author: string;
  post: string;
  replyTo?: string;
}

export async function getMessageByPostID(pid: string, p?: Pagination) {
  const limit = p?.pageSize || 25
  const offset = (p?.page || 0) * limit
  return MessageModel.find({ post: pid })
    .sort({ createdAt: 1 })
    .skip(offset)
    .limit(limit)
}

export async function getMessageByID(id: string) {
  return MessageModel.findById(id)
}

export async function createMessage(msg: MessageForm) {
  try {
    const post = await PostModel.findById(msg.post)
    if (!post) {
      throw ErrPostNotFound
    }

    const user = await UserModel.findById(msg.author)
    if (!user) {
      throw ErrUserNotFound
    }

    if (msg.replyTo) {
      const repMsg = await MessageModel.findById(msg.replyTo)
      if (!repMsg) {
        throw ErrMessageNotFound
      }
    }

    const m = new MessageModel({ ...msg })
    return m.save()
  } catch (err) {
    throw err
  }
}

export async function deleteMessage(id: string, uid: string) {
  try {
    const msg = await MessageModel.findById(id)
    if (!msg) {
      throw ErrMessageNotFound
    }
    if (msg.author !== uid) {
      throw ErrYouAreNotAllowed
    }

    msg.content = 'Message removed by the author!'
    return msg.save()
  } catch (err) {
    throw err
  }
}