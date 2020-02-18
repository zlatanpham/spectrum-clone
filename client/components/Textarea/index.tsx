import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type TextareaStyle = 'thin' | 'bold';

const StyledTextarea = styled.textarea`
  ${tw`block border border-gray-300 rounded-lg bg-white text-secondary px-3 py-2 outline-none`};
  &:disabled,
  &:read-only {
    ${tw`bg-gray-200`}
  }
`;

const StyledBoldTextarea = styled(StyledTextarea)`
  ${tw`text-sm hover:border-gray-500 focus:border-purple-400`};
  transition: border-color 0.2s ease;
  border-width: 2px;
  &:disabled,
  &:read-only {
    ${tw`hover:border-gray-300 focus:border-gray-300`}
  }
`;

const StyledThinTextarea = styled(StyledTextarea)`
  ${tw`text-base`};
  border-width: 1px;
`;

export type TextareaProps = {
  textareaStyle?: TextareaStyle;
  disabled?: boolean;
  readOnly?: boolean;
} & React.HTMLAttributes<HTMLTextAreaElement>;

const Textarea = ({ textareaStyle = 'bold', ...rest }: TextareaProps) => {
  if (textareaStyle === 'thin') {
    return <StyledThinTextarea {...rest} />;
  }
  return <StyledBoldTextarea {...rest} />;
};

export default Textarea;
