import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';

export default function UserNamePage() {
  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>User sidebar</RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>User Detail content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
