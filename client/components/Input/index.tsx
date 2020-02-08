import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export type InputSize = 'small' | 'medium';

const StyledInput = styled.input<{ inputSize: InputSize }>`
  ${tw`border border-gray-300 rounded-lg bg-white text-secondary px-3 text-base outline-none hover:border-gray-darkest`};
  border-width: 2px;
  padding-top: ${props => (props.inputSize === 'small' ? '8px' : '16px')};
  padding-bottom: ${props => (props.inputSize === 'small' ? '8px' : '16px')};
  height: ${props => (props.inputSize === 'small' ? '32px' : '40px')};
`;

export type InputProps = {
  mouseEffect?: boolean;
  inputSize?: InputSize;
} & React.HTMLAttributes<HTMLInputElement>;

const Input = ({ inputSize = 'medium', ...rest }: InputProps) => {
  return <StyledInput inputSize={inputSize} {...rest} />;
};

export default Input;
