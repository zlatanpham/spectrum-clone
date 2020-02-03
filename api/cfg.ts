import dotenv, { DotenvParseOutput } from 'dotenv'

interface ENVCfg extends DotenvParseOutput {
  MONGO_URI: string
  PORT: string;
}

const parsedDENV = dotenv.config().parsed || {} as ENVCfg

let MONGO_URI = parsedDENV.MONGO_URI || process.env.MONGO_URI || '';

// support for branch deployment on heroku
const HEROKU_BRANCH = (process.env.HEROKU_BRANCH || '').replace(/\/|-/g, '_').trim()
if (HEROKU_BRANCH) {
  MONGO_URI = MONGO_URI.replace('db_branch', HEROKU_BRANCH)
}

export default {
  MONGO_URI,
  PORT: parsedDENV.PORT || process.env.PORT || 5000,
}