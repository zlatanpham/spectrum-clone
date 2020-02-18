import React from 'react';
import Card from 'components/Card';
import { useRouter } from 'next/router';
import ChannelMenuItem from 'components/ChannelMenuItem';

const sampleChannelList = [
  { name: 'General', slug: 'general', isMember: true },
  { name: 'React', slug: 'react', isMember: true },
  { name: 'Bootstrap', slug: 'bootstrap', isMember: false },
];

export default function ChannelsCard() {
  const { query } = useRouter();
  const { communityname } = query;
  return (
    <Card title="Channels" className="mb-3">
      <ul>
        <li>
          <ChannelMenuItem
            href={`/${communityname}`}
            isAll={true}
            isMember={false}
            name="All your channels"
            isActive
          />
        </li>
        {sampleChannelList.map(({ name, slug, isMember }) => (
          <li key={slug}>
            <ChannelMenuItem
              name={name}
              isMember={isMember}
              isAll={false}
              href={`/${communityname}/${slug}`}
              isActive={false}
            ></ChannelMenuItem>
          </li>
        ))}
      </ul>
    </Card>
  );
}
