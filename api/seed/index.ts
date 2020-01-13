import models from '../models';
export default async function seedInitialData() {
  try {
    // create users
    const user = await models.UserModel.findOneAndUpdate({
      email: "spectrum@clone.com"
    }, {
      email: 'spectrum@clone.com',
      password: 'admin',
      name: 'Spectrum',
    }, { upsert: true })


    // Community
    await models.CommunityModel.findOneAndUpdate({ slug: 'spectrum' }, {
      name: 'Spectrum',
      slug: 'spectrum',
      owner: user,
    }, { upsert: true })
  } catch (err) {
    throw err
  }
}
