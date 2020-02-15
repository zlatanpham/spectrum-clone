import React, { useState } from 'react';
import MenuItem from '../MenuItem';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';
import IconViewForward from 'components/icons/IconViewForward';
import OutlineButton from 'components/Button/OutlineButton';
import PrimaryOutlineButton from 'components/Button/PrimaryOutlineButton';

interface ChannelMenuItemProps {
  name: string;
  isAll: boolean;
  isMember: boolean;
  href: string;
  isActive: boolean;
}

const CustomMenuItem = styled(MenuItem)`
  ${tw`hover:bg-gray-200 px-3 font-medium overflow-hidden text-secondary relative`};
  &:before {
    ${props => (props.active ? tw`bg-gray-800` : tw`bg-transparent`)};
  }
  &:hover:before {
    ${props => (props.active ? tw`bg-gray-800` : tw`bg-transparent`)};
  }
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChannelMenuItem = ({
  isAll,
  isMember,
  name,
  href,
  isActive,
}: ChannelMenuItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  if (isAll) {
    return (
      <CustomMenuItem active={isActive}>
        <Link href={href}>
          <a className="flex items-center h-full justify-between">
            # All your channels <IconViewForward size={22} />
          </a>
        </Link>
      </CustomMenuItem>
    );
  }

  return (
    <CustomMenuItem active={isActive}>
      <Link href={href}>
        <a className="absolute inset-0"></a>
      </Link>
      <div className="flex items-center h-full justify-between">
        <span># {name}</span>
        {isMember ? (
          <OutlineButton
            size="small"
            className="relative"
            style={{ width: 100 }}
            onMouseOver={() => setIsHovered(true)}
            onMouseOut={() => setIsHovered(false)}
          >
            {isHovered ? 'Leave' : 'Member'}
          </OutlineButton>
        ) : (
          <PrimaryOutlineButton
            size="small"
            className="relative"
            style={{ width: 100 }}
          >
            Join
          </PrimaryOutlineButton>
        )}
      </div>
    </CustomMenuItem>
  );
};

export default ChannelMenuItem;
