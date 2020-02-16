import React from 'react';
import Link from 'next/link';
import { Container, CoverPhoto, RoundAvatarContainer } from './styles';
import { UserAvatar } from 'components/Avatar';
import UserMeta from './UserMeta';
import UserActions from './UserActions';

export interface UserCardProps {
  user: any;
  className?: string;
}

const UserCard: React.FC<UserCardProps> = ({ user, className = '' }) => {
  const { username, coverPhoto } = user;
  return (
    <Container className={className}>
      <Link href={`/users/${username}`}>
        <CoverPhoto src={coverPhoto} />
      </Link>

      <RoundAvatarContainer>
        <UserAvatar user={user} size={60} />
      </RoundAvatarContainer>

      <UserMeta user={user} />

      <UserActions user={user} />
    </Container>
  );
};

export default UserCard;
