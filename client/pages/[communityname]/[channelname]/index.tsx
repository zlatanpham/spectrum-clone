import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import ChannelsCard from 'components/community/ChannelsCard';
import ChannelThread from 'components/ChannelThread';
import TeamCard from 'components/community/TeamCard';
import CommunityPageCard from 'components/community/CommunityPageCard';

export default function ChannelPage() {
  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <CommunityPageCard />
        <ChannelsCard />
        <TeamCard />
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        <ChannelThread />
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
