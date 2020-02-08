import React from 'react';
import styled from 'styled-components';

const InlineSvg = styled.svg`
  color: inherit;
  fill: currentColor;
`;

export default function createIcon(svg: React.ReactNode) {
  return (props: React.HTMLAttributes<SVGElement>) => (
    <InlineSvg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="title"
      viewBox="0 0 32 32"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {svg}
    </InlineSvg>
  );
}
