import tw from 'tailwind.macro';
import styled from 'styled-components';
import Link from 'next/link';

type ContainerProps = {
  size: number;
  type: string;
};

export const Container = styled.div<ContainerProps>`
  ${tw`inline-block relative border-none bg-white`};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props =>
    props.type === 'community' ? `${props.size / 8}px` : '100%'};
`;

export const AvatarLink = styled(Link)`
  ${tw`flex flex-none flex-col h-full w-full justify-center items-center pointer-events-auto`};
`;

type AvatarImageProps = {
  size: number;
  type: string;
};

export const AvatarImage = styled.img<AvatarImageProps>`
  ${tw`inline-block object-cover bg-white`};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  border-radius: ${props =>
    props.type === 'community' ? `${props.size / 8}px` : '100%'};
`;
