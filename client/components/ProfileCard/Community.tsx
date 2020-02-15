import React from 'react';
import Link from 'next/link';
import { Container, CoverPhoto, AvatarContainer } from './styles';
import { CommunityAvatar } from 'components/Avatar';
import CommunityMeta from './CommunityMeta';
import CommunityActions from './CommunityActions';

export interface CommunityCardProps {
  community: any;
  className?: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({
  community,
  className = '',
}) => {
  const { slug, coverPhoto } = community;
  return (
    <Container className={className}>
      <Link href={`/${slug}`} passHref>
        <a>
          <CoverPhoto src={coverPhoto} />
        </a>
      </Link>

      <AvatarContainer>
        <CommunityAvatar community={community} size={60} />
      </AvatarContainer>

      <CommunityMeta community={community} />

      <CommunityActions community={community} />
    </Container>
  );
};

export default CommunityCard;
