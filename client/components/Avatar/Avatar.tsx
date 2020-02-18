import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import tw from 'tailwind.macro';

const Container = styled.div<{ avatarSize: number; isSquared: boolean }>`
    ${tw`overflow-hidden`}
    border-radius: ${props => (props.isSquared ? 6 : 9999)}px;
    width: ${props => props.avatarSize}px;
    height: ${props => props.avatarSize}px;

    > img {
    border-radius: ${props => (props.isSquared ? 6 : 9999)}px;
    width: ${props => props.avatarSize}px;
    height: ${props => props.avatarSize}px;
    }
`;

interface AvatarProps {
  size?: number;
  url?: string;
  href?: string;
  squared?: boolean;
}

const Avatar = ({ size, url, href, squared = false }: AvatarProps) => {
  if (href) {
    return (
      <Container avatarSize={size || 32} isSquared={squared}>
        <Link href={href}>
          <a className="block">
            <img src={url || '/img/avatar.jpeg'} />
          </a>
        </Link>
      </Container>
    );
  }
  return (
    <Container avatarSize={size || 32} isSquared={squared}>
      <img src={url || '/img/avatar.jpeg'} />
    </Container>
  );
};

export default Avatar;
