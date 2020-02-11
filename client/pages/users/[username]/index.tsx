import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Card from 'components/Card';
// import { useRouter } from 'next/router';
import { UserCard } from 'components/ProfileCard';

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
  // const { query } = useRouter();

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
      <RightSidebarLayout.Body>User Detail content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
