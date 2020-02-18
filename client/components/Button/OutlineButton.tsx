import BaseButton, { BaseButtonProps, BaseButtonStyled } from './BaseButton';
import styled from 'styled-components';

const CustomStyledButton = styled(BaseButtonStyled)`
  color: rgb(36, 41, 46);
  background: transparent;
  border-color: rgb(235, 236, 237);
  &:hover {
    background: transparent;
    border-color: rgb(216, 217, 218);
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

const OutlineButton = (props: Omit<BaseButtonProps, 'ButtonWrapper'>) => {
  return <BaseButton {...props} ButtonWrapper={CustomStyledButton} />;
};

export default OutlineButton;
