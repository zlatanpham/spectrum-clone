import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const RightSidebarLayoutContainer = styled.div`
  ${tw`min-h-screen flex justify-between`}
  max-width: 1392px;
  width: 96%;
  display: flex;
`;

function RightSidebarLayout({ children }: { children: React.ReactNode }) {
  return <RightSidebarLayoutContainer>{children}</RightSidebarLayoutContainer>;
}

RightSidebarLayout.Sidebar = styled.div`
  width: 400px;
`;

RightSidebarLayout.Body = styled.div`
  ${tw`min-h-screen bg-white border-r border-l border border-t-0 border-b-0 border-gray-300`}
  width: calc(100% - 400px - 30px);
`;

export default RightSidebarLayout;
