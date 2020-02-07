import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import Link from 'next/link';
import Card from 'components/Card';
import { useRouter } from 'next/router';

export default function UserNamePage() {
  const { query } = useRouter();
  const { username } = query;

  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="border border-gray-300 rounded mb-4 mt-4 bg-white p-3">
          <Link href={`/users/${username}/settings`}>
            <a>
              <button className="border border-gray-300 px-4 py-2 bg-white rounded-full block">
                Settings
              </button>
            </a>
          </Link>
        </div>
        <Card title="Communities">
          <div className="p-3">Community list</div>
        </Card>
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>User Detail content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
