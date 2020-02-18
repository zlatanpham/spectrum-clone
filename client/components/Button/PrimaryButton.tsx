import BaseButton, { BaseButtonProps, BaseButtonStyled } from './BaseButton';
import styled from 'styled-components';

const CustomStyledButton = styled(BaseButtonStyled)`
  color: white;
  background: linear-gradient(rgb(123, 22, 255), rgb(113, 20, 234))
    rgb(123, 22, 255);
  border-color: rgb(113, 20, 234);
  &:hover {
    color: rgb(255, 255, 255);
    border-color: rgb(103, 18, 214);
    background: rgb(113, 20, 234);
  }
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.24) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.64) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }
`;

const PrimaryButton = (props: Omit<BaseButtonProps, 'ButtonWrapper'>) => {
  return <BaseButton {...props} ButtonWrapper={CustomStyledButton} />;
};

export default PrimaryButton;
