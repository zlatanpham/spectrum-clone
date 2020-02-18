import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`rounded overflow-hidden`}
  width:32px;
  height: 32px;

  img {
    max-width: 100%;
  }
`;

export interface CommunityBadgeProps {
  imageUrl: string;
}

const CommunityBadge = ({ imageUrl }: CommunityBadgeProps) => {
  return (
    <Container>
      <img src={imageUrl} />
    </Container>
  );
};

export default CommunityBadge;
