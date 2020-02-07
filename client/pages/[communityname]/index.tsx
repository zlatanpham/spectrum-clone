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

export default function CommunityNamePage() {
  const { query } = useRouter();
  const { communityname } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="rounded bg-white border border-gray-300 mb-3 mt-3">
          Community info
        </div>
        <Card title="Channels">
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
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>Community content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
