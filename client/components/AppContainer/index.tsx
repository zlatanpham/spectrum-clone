import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Sidebar from 'components/Sidebar';

const Container = styled.div`
  ${tw`flex min-h-screen bg-gray-100`}
`;

const LeftSide = styled.div`
  ${tw`bg-white`};
  width: 256px;
`;

const RightSide = styled.div`
  ${tw`min-h-screen flex flex-col items-center`};
  width: calc(100vw - 256px);
`;

const AppContainer: React.FC<any> = ({ children, isLogged }) => {
  return (
    <Container>
      <LeftSide>
        <Sidebar isLogged={isLogged} />
      </LeftSide>
      <RightSide>{children}</RightSide>
    </Container>
  );
};

export default AppContainer;
