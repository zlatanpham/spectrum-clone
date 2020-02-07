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

export default function ChannelPage() {
  const { query } = useRouter();
  const { communityname, post } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="rounded bg-white border border-gray-300 mb-3 mt-3 p-4">
          <b>{communityname}</b> - Community info
        </div>
        <Card title="Channels" className="mb-3">
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

        <Card title="Teams">
          <ul className="p-4">
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
      <RightSidebarLayout.Body>{JSON.stringify(post)}</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
