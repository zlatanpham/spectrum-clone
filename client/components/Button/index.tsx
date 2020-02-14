import React from 'react';
import classnames from 'classnames';
import { ButtonGlobalStyle, A, StyledLink } from './styled';

type To = {
  pathname?: string;
  search?: string;
  state?: Object;
};

export type buttonProps = {
  target?: string;
  href?: string;
  to?: string | To;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  size?: 'small';
  type:
    | 'white-icon'
    | 'primary'
    | 'white'
    | 'outline'
    | 'primary-outline'
    | 'white-outine'
    | 'warn-hover-outline'
    | 'text'
    | 'facebook'
    | 'twitter';
};
const Button = ({
  target,
  href,
  to,
  children,
  disabled,
  size,
  type,
}: buttonProps) => {
  const button = (
    <React.Fragment>
      <ButtonGlobalStyle />
      <button
        className={classnames(`btn btn--${type}`, {
          'btn--disabled': disabled,
          'btn--small': size === 'small',
        })}
      >
        {children}
      </button>
    </React.Fragment>
  );
  if (href)
    return (
      <A
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
      >
        {button}
      </A>
    );
  if (to) return <StyledLink href={to}>{button}</StyledLink>;
  return button;
};

export default Button;
