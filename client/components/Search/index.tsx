import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledInput = styled.input`
  ${tw`text-secondary font-semibold w-full border border-solid border-gray-300 rounded-full px-4 py-2 outline-none`}
  font-size: 15px;
  -webkit-appearance: none;
  max-width: 240px;
  border-color: rgb(235, 236, 237);
  border-image: initial;
  transition: all 0.2s ease-in-out 0s;

  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(178, 179, 180) 0px 0px 0px 4px;
    transition: all 0.2s ease-in-out 0s;
  }

  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(235, 236, 237) 0px 0px 0px 4px;
    transition: all 0.2s ease-in-out 0s;
  }
`;

export default function Search(props: React.HTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props} type="search" />;
}
