import React from 'react';
import { CommunityCard } from 'components/ProfileCard';

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

export default function CommunityPageCard() {
  return <CommunityCard community={community} className="my-3" />;
}
