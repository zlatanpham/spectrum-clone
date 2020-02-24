import dotenv from 'dotenv';
import { CorsOptions } from 'cors';

const parsedDENV = dotenv.config().parsed || {};

export const corsOpts: CorsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

export default {
  MONGO_URI: parsedDENV.MONGO_URI || process.env.MONGO_URI || '',
  PORT: parsedDENV.PORT || process.env.PORT || 5000,
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  JWT_SECRET: parsedDENV.JWT_SECRET || process.env.JWT_SECRET || '',
  JWT_TTL: parsedDENV.JWT_TTL || process.env.JWT_TTL || '',
  GITHUB_CLIENT_ID:
    parsedDENV.GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID || '',
  GITHUB_CLIENT_SECRET:
    parsedDENV.GITHUB_CLIENT_SECRET || process.env.GITHUB_CLIENT_SECRET || '',
  NODE_ENV: parsedDENV.NODE_ENV || process.env.NODE_ENV || '',

  CLIENT_URL: parsedDENV.CLIENT_URL || process.env.CLIENT_URL || '',
};
