import BaseButton, { BaseButtonProps, BaseButtonStyled } from './BaseButton';
import styled from 'styled-components';

export const CustomStyledTransparentButton = styled(BaseButtonStyled)`
  color: rgb(36, 41, 46);
  background: transparent;
  transition: box-shadow 0.2s ease-in-out 0s;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  &:hover {
    background: transparent;
  }
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(235, 236, 237) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(178, 179, 180) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
`;

const TransparentButton = (props: Omit<BaseButtonProps, 'ButtonWrapper'>) => {
  return (
    <BaseButton {...props} ButtonWrapper={CustomStyledTransparentButton} />
  );
};

export default TransparentButton;
