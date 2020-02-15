import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Avatar from 'components/Avatar/Avatar';
import Link from 'next/link';

const Container = styled.div`
  ${tw`bg-white border-b p-8`}
`;

export interface SettingHeaderProps {
  title: string;
  returnText: string;
  returnLink: string;
  avatarUrl: string;
  squared?: boolean;
}

const Title = styled.h2`
  ${tw`font-semibold leading-none text-secondary`}
  font-size:32px;
`;

const SettingHeader = ({
  returnText,
  returnLink,
  avatarUrl,
  title,
  squared = false,
}: SettingHeaderProps) => {
  return (
    <Container>
      <div className="flex items-center">
        <Avatar url={avatarUrl} size={48} squared={squared} />
        <div className="ml-4">
          <Link href={returnLink}>
            <a className="text-gray hover:text-primary text-base">
              {returnText}
            </a>
          </Link>
          <Title>{title}</Title>
        </div>
      </div>
    </Container>
  );
};

export default SettingHeader;
