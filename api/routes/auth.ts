import passport, { AuthenticateOptions } from 'passport';
import { Router, Response } from 'express';
import { IUser } from '../models/user-model';
import cfg from '../cfg';
import ms = require('ms');
import { IRequest } from '../types';

const router = Router();

const options: AuthenticateOptions = {
  scope: ['read:user,user:email'],
  session: false,
};

const ORIGINAL_URL = cfg.CLIENT_URL || 'https://spectrum-mu.now.sh';

let redirectUrl = ORIGINAL_URL;

router.get('/auth/github', (req: IRequest, ...rest) => {
  if (typeof req.query.r === 'string') {
    redirectUrl = req.query.r;
  }

  return passport.authenticate('github', options)(req, ...rest);
});

router.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    session: false,
    failureRedirect: ORIGINAL_URL,
  }),
  (req: IRequest, res: Response) => {
    const user: IUser = req.user;
    if (!user) {
      res.status(400).send('User not found.');
    }

    res.cookie('token', user.generateJWT(), {
      secure: false,
      maxAge: ms(cfg.JWT_TTL),
    });

    res.redirect(redirectUrl);
  },
);

export default router;
