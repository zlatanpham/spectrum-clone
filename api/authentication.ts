import passport from 'passport';
import { Strategy as GithubStrategy } from 'passport-github2';
import cfg from './cfg';
import userModel from './models/user-model';

export function setupPassport() {
  passport.use(
    new GithubStrategy(
      {
        clientID: cfg.GITHUB_CLIENT_ID as string,
        clientSecret: cfg.GITHUB_CLIENT_SECRET as string,
        callbackURL: '/auth/github/callback',
      },
      async function(
        _,
        __,
        ___,
        profile: any,
        done: (err?: Error | null | undefined, user?: any) => void,
      ) {
        const {
          id,
          emails,
          displayName,
          username,
          photos,
          profileUrl,
          _json,
        } = profile;

        const userData = {
          githubId: id,
          email: (emails && emails.length > 0 && emails[0].value) || null,
          name: displayName || username,
          userName: username,
          avatarPhoto: (photos && photos.length > 0 && photos[0].value) || null,
          profileUrl: profileUrl,
          description: _json.bio,
          website: _json.blog,
        };

        try {
          // create users
          const user = await userModel.findOneAndUpdate(
            {
              githubId: id,
            },
            userData,
            { upsert: true },
          );

          return done(null, user);
        } catch (err) {
          return done(err);
        }
      },
    ),
  );
}
