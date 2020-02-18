import { storiesOf } from '@storybook/react';
import React from 'react';
import { CommunityCard, UserCard } from '.';

const community = {
  name: 'Styled Components',
  slug: 'styled-components',
  website: 'https://styled-components.com',
  metaData: {
    members: 1234,
    onlineMembers: 321,
  },
  communityPermissions: {
    isMember: true,
    isOwner: false,
    isModerator: false,
  },
  description:
    'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress!',
  profilePhoto:
    'https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/test.png.0.3184486404030735?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=77587b2e6b624982e2ca74773e8f5fea',
  coverPhoto:
    'https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/styled-components-gradient.png.0.3919079633731517?w=1280&h=384&dpr=2&q=100&expires=1577664000000&ixlib=js-1.4.1&s=b816b4d80a877b36fe1bf8d915a824f2',
};

const user = {
  id: '123',
  name: 'Dan Nguyen',
  username: 'dannd',
  website: 'https://abc.xyz',
  github: {
    username: 'danndz',
  },
  isOnline: true,
  description: 'Web developer',
  profilePhoto:
    'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F26010477%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=45aba998f3be163a7f1721e6e0981559',
};

storiesOf('components/ProfileCard', module)
  .add('CommunityCard', () => (
    <div className="bg-white w-1/4">
      <CommunityCard community={community} />
    </div>
  ))
  .add('UserCard', () => (
    <div className="bg-white w-1/4">
      <UserCard user={user} />
    </div>
  ));
