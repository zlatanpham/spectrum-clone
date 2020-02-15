import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import tw from 'tailwind.macro';

const Container = styled.div<{ avatarSize: number }>`
    ${tw`rounded-full overflow-hidden`}
    width: ${props => props.avatarSize}px;
    height: ${props => props.avatarSize}px;

    > img {
    ${tw`rounded-full`}
    width: ${props => props.avatarSize}px;
    height: ${props => props.avatarSize}px;
    }
`;

interface AvatarProps {
  size?: number;
  url?: string;
  href?: string;
}

const Avatar = ({ size, url, href }: AvatarProps) => {
  if (href) {
    return (
      <Container avatarSize={size || 32}>
        <Link href={href}>
          <a className="block">
            <img src={url || '/img/avatar.jpeg'} />
          </a>
        </Link>
      </Container>
    );
  }
  return (
    <Container avatarSize={size || 32}>
      <img src={url || '/img/avatar.jpeg'} />
    </Container>
  );
};

export default Avatar;
