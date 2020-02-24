import React from 'react';
import MenuItem from 'components/MenuItem';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';

export interface SidebarMenuItemProps {
  placeholder: React.ReactNode;
  href?: string;
  active: boolean;
  onClick?: (e: React.MouseEvent) => void;
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
  onClick,
}) => {
  const linkContent = (
    <StyledLink>
      <IconWrapper>{placeholder}</IconWrapper>
      <span className="ml-3">{children}</span>
    </StyledLink>
  );

  return (
    <CustomMenuItem active={active} onClick={onClick}>
      {href ? <Link href={href}>{linkContent}</Link> : linkContent}
    </CustomMenuItem>
  );
};

export default SidebarMenuItem;
