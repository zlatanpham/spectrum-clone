import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type InputSize = 'small' | 'medium';
export type InputStyle = 'thin' | 'bold';

const StyledInput = styled.input<{ inputSize: InputSize }>`
  ${tw`border border-gray-300 rounded-lg bg-white text-secondary px-3 outline-none`};
  padding-top: ${props => (props.inputSize === 'small' ? '8px' : '16px')};
  padding-bottom: ${props => (props.inputSize === 'small' ? '8px' : '16px')};
  height: ${props => (props.inputSize === 'small' ? '32px' : '40px')};
  &:disabled,
  &:read-only {
    ${tw`bg-gray-200`}
  }
`;

const StyledBoldInput = styled(StyledInput)`
  ${tw`text-sm hover:border-gray-500 focus:border-purple-400`};
  transition: border-color 0.2s ease;
  border-width: 2px;
  &:disabled,
  &:read-only {
    ${tw`hover:border-gray-300 focus:border-gray-300`}
  }
`;

const StyledThinInput = styled(StyledInput)`
  ${tw`text-base`};
  border-width: 1px;
`;

export type InputProps = {
  inputStyle?: InputStyle;
  inputSize?: InputSize;
  disabled?: boolean;
  readOnly?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

const Input = ({
  inputSize = 'medium',
  inputStyle = 'bold',
  ...rest
}: InputProps) => {
  if (inputStyle === 'thin') {
    return <StyledThinInput inputSize={inputSize} {...rest} />;
  }
  return <StyledBoldInput inputSize={inputSize} {...rest} />;
};

export default Input;
