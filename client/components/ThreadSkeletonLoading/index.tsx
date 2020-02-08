import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const createLoadingKeyframes = (width: number) => keyframes`
    from {
      background-position: -${width * 1.5}px 0;
    }
    to {
      background-position: ${width}px 0;
    }
`;

const createLoadingStyles = (width: number, height: number) => css`
  width: ${width || '100'}px;
  height: ${height || '100'}px;
  background-color: #edf2f7;
  background: linear-gradient(to right, #edf2f7 0%, #cbd5e0 17%, #edf2f7 33%);
  background-size: ${width * 5 || '100'}px 100px;
  animation-duration: 1s;
  animation-delay: -0.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
`;

const AvatarLoading = styled.div<{ width: number; height: number }>`
  ${props => createLoadingStyles(props.width, props.height)}
  border-radius: 50%;
  animation-name: ${props => createLoadingKeyframes(props.width)};
`;

const TextContainer = styled.div`
  padding-left: 10px;
`;

const TextLoading = styled.div<{ width: number; height: number }>`
  ${props => createLoadingStyles(props.width, props.height)}
  animation-name: ${props => createLoadingKeyframes(props.width)};
  margin-bottom: 10px;
`;

interface ThreadSkeletionLoadingProps {
  width?: number;
  height?: number;
  lineText?: number;
  rest?: any;
}

const ThreadSkeletonLoading: React.FC<ThreadSkeletionLoadingProps> = ({
  width = 500,
  height = 100,
  lineText = 4,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <AvatarLoading width={width / 10} height={width / 10} />
      <TextContainer>
        {Array(lineText).fill(
          <TextLoading
            width={(width * 9) / 10 - 10}
            height={height / lineText - 10}
          />,
        )}
      </TextContainer>
    </Container>
  );
};

export default ThreadSkeletonLoading;
