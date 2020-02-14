import React from 'react';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { Placement } from 'tippy.js';

export interface TipProps {
  content: string;
  style?: Object;
  children: React.ReactElement;
  placement?: Placement;
}

const Tip: React.FC<TipProps> = ({ children, ...props }: TipProps) => {
  const { style = {}, content = '', placement = 'top', ...rest } = props;

  if (!React.Children.only(children)) {
    console.error('Need to be only child');
    return null;
  }

  return (
    <Tippy
      placement={placement}
      touch={false}
      arrow={true}
      content={
        <span style={{ fontSize: '14px', fontWeight: 600, ...style }}>
          {content}
        </span>
      }
      // https://github.com/FezVrasta/popper.js/issues/535
      popperOptions={{
        modifiers: {
          preventOverflow: {
            boundariesElement: 'window',
          },
        },
      }}
      {...rest}
    >
      {children}
    </Tippy>
  );
};

export default Tip;
