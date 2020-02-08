import React from 'react';
import tw from 'tailwind.macro';
import styled, { keyframes } from 'styled-components';
import classnames from 'classnames';

export type SpinnerScheme = 'purple' | 'gray';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Icon = styled.span`
  ${tw`inline-block rounded-full border-solid`}
  width: 14px;
  height: 14px;
  border-width: 2px;
  border-top-color: transparent !important;
  border-bottom-color: transparent !important;
  animation: ${spin} 1500ms linear infinite;
`;

export interface SpinnerProps {
  scheme?: SpinnerScheme;
}

const Spinner: React.FC<SpinnerProps> = ({ scheme = 'purple' }) => {
  return (
    <Icon
      className={classnames({
        'border-purple-300': scheme === 'purple',
        'border-gray': scheme === 'gray',
      })}
    />
  );
};

export default Spinner;
