import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Link from 'next/link';
import IconThumbsup from 'components/icons/IconThumbsup';
import IconMessageSimple from 'components/icons/IconMessageSimple';

export interface ThreadItemProps {
  data: {
    avatar: string;
    name: string;
    time: string;
    channelName: string;
    title: string;
    desc: string;
    likes: number;
    comments: number;
  };
  href: string;
  viewed: boolean;
}

const Container = styled.div<{ viewed: boolean }>`
  ${tw`flex items-start border-b border-gray-100 overflow-hidden relative`}
  padding: 12px 20px 12px 12px;
  box-shadow: ${props =>
    props.viewed ? 'none' : 'rgb(68, 0, 204) 2px 0px 0px inset'};
  ${props => (props.viewed ? tw`bg-white` : tw`bg-purple-100`)}
`;

const LinkOverlay = styled.a`
  ${tw`absolute inset-0`}
`;

const Avatar = styled.div`
  ${tw`rounded-full overflow-hidden flex-none`}
  width: 40px;
  height: 40px;
  img {
    ${tw`rounded-full`}
    max-width:100%;
  }
`;

const Header = styled.div`
  ${tw`flex items-center`}
  font-size: 15px;
`;

const Dot = styled.span`
  ${tw`rounded-full bg-gray block mx-2`}
  height: 3px;
  width: 3px;
`;

const Body = styled.div`
  width: calc(100% - 40px);
  padding-left: 12px;
  font-size: 15px;
`;

const Heading = styled.h3`
  ${tw`text-gray-700 font-bold my-2 mb-1`}
  font-size: 15px;
`;

const Desc = styled.h3`
  font-size: 15px;
  word-break: break-word;
  white-space: pre-line;
  margin-top: 2px;
  line-height: 1.4em;
`;

const SocialRow = styled.div`
  ${tw`flex items-center mt-2`}
`;

const ThreadItem = ({
  data: { avatar, channelName, comments, desc, likes, name, time, title },
  href,
  viewed,
}: ThreadItemProps) => {
  return (
    <Container viewed={viewed}>
      <Link href={href}>
        <LinkOverlay></LinkOverlay>
      </Link>
      <Avatar>
        <img src={avatar} />
      </Avatar>
      <Body>
        <Header>
          <Link href={'/'}>
            <a className="font-bold">{name}</a>
          </Link>
          <Dot></Dot>
          <span className="text-gray">{time}</span>
        </Header>
        <Link href={'/'}>
          <a className="font-medium text-gray">#{channelName}</a>
        </Link>
        <Heading>{title}</Heading>
        <Desc>{desc}</Desc>
        <SocialRow>
          <div className="flex items-center text-gray-700">
            <IconThumbsup size={24} />
            <span className="text-xs ml-1 text-bold">{likes}</span>
          </div>
          <div className="flex items-center text-gray-700 ml-3">
            <IconMessageSimple size={24} />
            <span className="text-xs ml-1 text-bold">{comments}</span>
          </div>
        </SocialRow>
      </Body>
    </Container>
  );
};

export default ThreadItem;
