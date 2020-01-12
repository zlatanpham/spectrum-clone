import dotenv, { DotenvParseOutput } from 'dotenv'

interface ENVCfg extends DotenvParseOutput {
  MONGO_URI: string
  PORT: string;
}

export default dotenv.config().parsed as ENVCfg