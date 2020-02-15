import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Card from 'components/Card';
import { UserCard } from 'components/ProfileCard';
import Tabs from 'components/Tabs';
import { useRouter } from 'next/router';
const { TabPane } = Tabs;

const user = {
  id: '123',
  name: 'Dan Nguyen',
  username: 'dannd',
  website: 'https://abc.xyz',
  github: {
    username: 'danndz',
  },
  isOnline: true,
  description: 'Web developer',
  profilePhoto:
    'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F26010477%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=45aba998f3be163a7f1721e6e0981559',
};

export default function UserNamePage() {
  const {
    query: { tab },
  } = useRouter();

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="border border-gray-300 rounded mb-4 mt-4 bg-white">
          <UserCard user={user} />
        </div>
        <Card title="Communities">
          <div className="p-4">Community list</div>
        </Card>
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
