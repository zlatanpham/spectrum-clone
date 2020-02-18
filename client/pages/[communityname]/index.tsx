import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import ChannelsCard from 'components/community/ChannelsCard';
import ChannelThread from 'components/ChannelThread';
import CommunityPageCard from 'components/community/CommunityPageCard';

export default function CommunityNamePage() {
  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <CommunityPageCard />
        <ChannelsCard />
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        <ChannelThread />
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
