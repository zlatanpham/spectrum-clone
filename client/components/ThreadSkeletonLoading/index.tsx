import React from 'react';
import styled, { keyframes } from 'styled-components';

const flash = keyframes`
    from {
      background-position-x: 100%;
    }
    to {
      background-position-x: -100%;
    }
`;

const LoaderBlock = styled.div<{
  width: string;
  height: string;
  radius?: string;
}>`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.radius || '0px'};
  background-color: #fafafa;
  background: linear-gradient(to right, #fafafa 0%, #ebeced 17%, #fafafa 33%);
  background-size: 300% ${props => props.height};
  animation-name: ${flash};
  animation-duration: 2s;
  animation-delay: -1s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

const ThreadSkeletonLoading = () => {
  return (
    <div className="flex overflow-hidden">
      <LoaderBlock
        className="flex-none mr-2 rounded-full"
        width="50px"
        height="50px"
      />
      <div className="w-full">
        <LoaderBlock className="mb-1" width="50%" height="20px" />
        <LoaderBlock className="mb-2" width="50%" height="15px" />
        <LoaderBlock className="mb-1" width="100%" height="20px" />
        <LoaderBlock className="mb-2" width="30%" height="20px" />
      </div>
    </div>
  );
};

export default ThreadSkeletonLoading;
