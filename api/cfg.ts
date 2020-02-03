import dotenv, { DotenvParseOutput } from 'dotenv'

interface ENVCfg extends DotenvParseOutput {
  MONGO_URI: string
  PORT: string;
}

const parsedDENV = dotenv.config().parsed || {} as ENVCfg

export default {
  MONGO_URI: parsedDENV.MONGO_URI || process.env.MONGO_URI || '',
  PORT: parsedDENV.PORT || process.env.PORT || 5000,
}