import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import ChannelsCard from 'components/community/ChannelsCard';
import CommunityPageCard from 'components/community/CommunityPageCard';
import TeamCard from 'components/community/TeamCard';
import { useRouter } from 'next/router';
import PostHeader from 'components/post/PostHeader';

export default function ChannelPage() {
  const { query } = useRouter();
  const { post } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <CommunityPageCard />
        <ChannelsCard />
        <TeamCard />
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        <PostHeader />
        {JSON.stringify(post)}
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
