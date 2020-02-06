import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';

export default function CommunityNamePage() {
  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>Community sidebar</RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>Community content</RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
