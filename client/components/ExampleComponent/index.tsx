import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Container = styled.div`
  ${tw`p-8 bg-gray-300 text-2xl font-bold`}
`;

interface ExampleComponentProps {}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ children }) => {
  return <Container className="border border-grey m-5">{children}</Container>;
};

export default ExampleComponent;
