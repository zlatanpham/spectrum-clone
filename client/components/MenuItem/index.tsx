import styled from 'styled-components';
import tw from 'tailwind.macro';

export const MenuItem = styled('div')<{ active?: boolean }>`
  ${tw`text-base bg-white hover:bg-gray-100 relative cursor-pointer`};
  ${props =>
    props.active ? tw`bg-gray-100 hover:bg-purple-100` : tw`bg-white`}
  height: 52px;
  padding-left: 3px;
  transition: all 0.2s ease;

  &:before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    ${props => (props.active ? tw`bg-gray-800` : tw`bg-transparent`)};
    transition: all 0.2s ease;
  }

  &:hover:before {
    ${props => (props.active ? tw`bg-purple-400` : tw`bg-transparent`)};
  }
`;

export default MenuItem;
