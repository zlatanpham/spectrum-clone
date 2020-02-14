import models from '../models';

export default async function seedInitialData() {

  try {
    // create users
    const user = await models.User.findOneAndUpdate({
      email: "spectrum@clone.com"
    }, {
      email: 'spectrum@clone.com',
      password: 'admin',
      name: 'Spectrum',
    }, { upsert: true })

    // Community
    const comm = await models.Community.findOneAndUpdate({ slug: 'spectrum' }, {
      name: 'Spectrum',
      description: 'Spectrum forum for every one',
      slug: 'spectrum',
      isPublic: false,
      owner: user?._id,
    }, { upsert: true })

    await models.CommunityMember.findOneAndUpdate({ user: user?._id, community: comm?._id }, {
      user: user?.id,
      community: comm?._id,
      status: 'approved',
      role: 'owner',
    }, { upsert: true })

    // create default channel
    const chan = await models.Channel.findOneAndUpdate({ slug: 'spectrum/general' }, {
      name: 'General',
      description: 'General channel for every one',
      slug: 'spectrum/general',
      owner: user?._id,
      community: comm?._id,
    }, { upsert: true })

    await models.ChannelMember.findOneAndUpdate({ user: user?._id, channel: chan?._id }, {
      user: user?._id,
      channel: chan?._id,
      status: 'approved',
      role: 'moderator',
    }, { upsert: true })

  } catch (err) {
    throw err
  }
}
