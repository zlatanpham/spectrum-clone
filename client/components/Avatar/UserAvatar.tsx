import React from 'react';
import { Container, AvatarImage, AvatarLink } from './styles';

export interface UserAvatar {
  user: any;
  size: number;
}

const UserAvatar: React.FC<UserAvatar> = ({ user, size }) => {
  const { username, profilePhoto } = user;
  return (
    <Container size={size} type="user">
      <AvatarLink href={`/users/${username}`} passHref>
        <a>
          <AvatarImage src={profilePhoto} size={size} type="user" />
        </a>
      </AvatarLink>
    </Container>
  );
};

export default UserAvatar;
