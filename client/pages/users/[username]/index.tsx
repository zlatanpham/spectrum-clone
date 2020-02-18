import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Tabs from 'components/Tabs';
import { useRouter } from 'next/router';
import CommunityCard from 'components/user/CommunityCard';
import UserPageCard from 'components/user/UserPageCard';
const { TabPane } = Tabs;

export default function UserNamePage() {
  const {
    query: { tab },
  } = useRouter();

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <UserPageCard />
        <CommunityCard />
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        <Tabs
          current={tab as string}
          options={[
            { key: 'posts', name: 'Posts' },
            { key: 'activity', name: 'Activity' },
            { key: 'search', name: 'Search' },
          ]}
          onTabClick={key => {
            window.history.pushState('', '', `?tab=${key}`);
          }}
          fullwidth
        >
          <TabPane
            name="posts"
            render={<div className="p-5">Posts</div>}
          ></TabPane>
          <TabPane
            name="activity"
            render={<div className="p-5">Activity</div>}
          ></TabPane>
          <TabPane
            name="search"
            render={<div className="p-5">Search</div>}
          ></TabPane>
        </Tabs>
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
