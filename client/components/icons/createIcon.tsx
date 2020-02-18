import React from 'react';
import styled from 'styled-components';

const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

const SvgWrapper = styled.div<{ size: number }>`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`;

export default function createIcon(svg: React.ReactNode) {
  return ({
    size = 32,
    className = '',
    ...props
  }: { size?: number; className?: string } & React.HTMLAttributes<
    SVGElement
  >) => (
    <SvgWrapper size={size} className={className}>
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        {svg}
      </InlineSvg>
    </SvgWrapper>
  );
}
