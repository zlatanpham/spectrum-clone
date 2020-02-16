import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`flex w-full mt-1 text-sm font-medium text-gray`}
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledInlineInput = styled.input`
  border: none;
  ${tw`border-b text-secondary outline-none bg-transparent text-secondary border-gray-400 focus:border-secondary`};
  margin-left: 2px;
  font-size: inherit;
  font-weight: inherit;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  width: 50%;
  &:disabled,
  &:read-only {
  }
`;

export type InlineInputProps = {
  prefix: string;
  disabled?: boolean;
  readOnly?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const InlineInput = ({ prefix, ...rest }: InlineInputProps) => {
  return (
    <Container>
      {prefix}/
      <StyledInlineInput {...rest} />
    </Container>
  );
};

export default InlineInput;
