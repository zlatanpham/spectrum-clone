import React from 'react';
import { Container, AvatarImage, AvatarLink } from './styles';

export interface CommunityAvatar {
  community: any;
  size: number;
}

const CommunityAvatar: React.FC<CommunityAvatar> = ({ community, size }) => {
  const { slug, profilePhoto } = community;
  return (
    <Container size={size} type="community">
      <AvatarLink href={`/${slug}`} passHref>
        <a>
          <AvatarImage src={profilePhoto} size={size} type="community" />
        </a>
      </AvatarLink>
    </Container>
  );
};

export default CommunityAvatar;
