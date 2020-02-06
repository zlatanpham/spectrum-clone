import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Container = styled.div`
  ${tw`border-r border-gray-300 min-h-screen`}
`;

const Sidebar = () => {
  return <Container>Link</Container>;
};

export default Sidebar;
