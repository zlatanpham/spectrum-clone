import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Card from 'components/Card';
import Link from 'next/link';
import { useRouter } from 'next/router';

const sampleChannelList = [
  { name: 'General', slug: 'general' },
  { name: 'React', slug: 'react' },
  { name: 'Bootstrap', slug: 'bootstrap' },
];

const sampleTeamList = [
  { name: 'John Doe', slug: 'john7' },
  { name: 'Jessica Doe', slug: 'jessica' },
];

const samplePostList = [
  {
    name: 'How to meet deadline',
    slug: 'how-to-meet-deadline',
    id: '123-456-789',
    channel: {
      slug: 'react',
    },
  },
  {
    name: 'How to not sleep',
    slug: 'how-to-not-sleep',
    id: '987-654-321',
    channel: { slug: 'react' },
  },
];

export default function ChannelPage() {
  const { query } = useRouter();
  const { communityname } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="rounded bg-white border border-gray-300 mb-3 mt-3 p-3">
          <b>{communityname}</b> - Community info
        </div>
        <Card title="Channels" className="mb-3">
          <ul className="p-3">
            {sampleChannelList.map(({ name, slug }) => (
              <li key={slug}>
                <Link href={`/${communityname}/${slug}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Teams">
          <ul className="p-3">
            {sampleTeamList.map(({ name, slug }) => (
              <li key={slug}>
                <Link href={`/users/${slug}`}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Card>
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        <ul className="p-3">
          {samplePostList.map(({ name, slug, id, channel }) => (
            <li key={slug}>
              <Link href={`/${communityname}/${channel.slug}/${slug}~${id}`}>
                <a>{name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
