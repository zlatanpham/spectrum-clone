import React from 'react';
import MenuItem from 'components/MenuItem';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';

export interface SidebarMenuItemProps {
  placeholder: React.ReactNode;
  href: string;
  active: boolean;
}

const StyledLink = styled.a`
  ${tw`flex items-center h-full`}
`;

const IconWrapper = styled('span')`
  ${tw`flex items-center justify-center`}
  width: 32px;
  height: 32px;
`;

const CustomMenuItem = styled(MenuItem)`
  ${props => (props.active ? tw`text-secondary` : tw`text-gray`)}
  ${tw`hover:text-purple-500 px-2 font-medium overflow-hidden`};
  font-size: 15px;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    transition: all 0.2s ease;
  }
`;

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  children,
  active,
  href,
  placeholder,
}) => {
  return (
    <CustomMenuItem active={active}>
      <Link href={href}>
        <StyledLink>
          <IconWrapper>{placeholder}</IconWrapper>
          <span className="ml-3">{children}</span>
        </StyledLink>
      </Link>
    </CustomMenuItem>
  );
};

export default SidebarMenuItem;
