import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from 'next/link';

export const Anchor = styled.a`
  ${tw`flex items-center flex-none`}
`;

export const StyledLink = styled(Link)`
  ${tw`flex items-center flex-none`}
`;

type To = {
  pathname?: string;
  search?: string;
  state?: Object;
};

type ButtonSize = 'small' | 'medium';

export type BaseButtonProps = {
  target?: string;
  href?: string;
  to?: string | To;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  size?: ButtonSize;
  ButtonWrapper: React.FunctionComponent<{ size: ButtonSize }>;
};

export const BaseButtonStyled = styled.button<{ size: ButtonSize }>`
  ${tw`font-semibold flex items-center justify-center cursor-pointer flex-none leading-tight rounded-full`}
  padding: ${props => (props.size === 'medium' ? '10px 16px' : '6px 12px')};
  font-size: ${props => (props.size === 'medium' ? '16px' : '15px')};
  border: 1px solid transparent;
  border-image: initial;
  transition: box-shadow 0.2s ease-in-out 0s;

  &:focus {
    box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #ebeced;
    transition: box-shadow 0.2s ease-in-out;
    outline: none;
  }
`;

const BaseButton = ({
  target,
  href,
  to,
  size = 'medium',
  children,
  ButtonWrapper,
}: BaseButtonProps) => {
  const button = <ButtonWrapper size={size}>{children}</ButtonWrapper>;
  if (href)
    return (
      <Anchor
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
      >
        {button}
      </Anchor>
    );
  if (to) return <StyledLink href={to}>{button}</StyledLink>;
  return button;
};

export default BaseButton;
