import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Card from 'components/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CommunityCard } from 'components/ProfileCard';

const sampleChannelList = [
  { name: 'General', slug: 'general' },
  { name: 'React', slug: 'react' },
  { name: 'Bootstrap', slug: 'bootstrap' },
];

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

export default function CommunityNamePage() {
  const { query } = useRouter();
  const { communityname } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="rounded bg-white border border-gray-300 mb-3 mt-3">
          <CommunityCard community={community} />
        </div>
        <Card title="Channels">
          <ul className="p-4">
            {sampleChannelList.map(({ name, slug }) => (
              <li key={slug}>
                <Link href={`/${communityname}/${slug}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>Community content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
