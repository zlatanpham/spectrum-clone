import BaseButton, { BaseButtonProps, BaseButtonStyled } from './BaseButton';
import styled from 'styled-components';

const CustomStyledButton = styled(BaseButtonStyled)`
  color: rgb(123, 22, 255);
  background: transparent;
  border-color: rgb(123, 22, 255);
  &:hover {
    color: rgb(113, 20, 234);
    background: rgba(123, 22, 255, 0.04);
    border-color: rgb(113, 20, 234);
  }
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.16) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.48) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
`;

const PrimaryOutlineButton = (
  props: Omit<BaseButtonProps, 'ButtonWrapper'>,
) => {
  return <BaseButton {...props} ButtonWrapper={CustomStyledButton} />;
};

export default PrimaryOutlineButton;
