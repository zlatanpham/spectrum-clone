import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Container = styled.div`
  ${tw`p-8 bg-gray-300`}
`;

interface ExampleComponentProps {}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ children }) => {
  return <Container className="border border-grey">{children}</Container>;
};

export default ExampleComponent;
