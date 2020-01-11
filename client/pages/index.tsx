import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Title = styled.h1`
  ${tw`mb-10 bg-gray-900`}
  color: red;
  font-size: 50px;
`;

export default () => <Title>My page</Title>;
