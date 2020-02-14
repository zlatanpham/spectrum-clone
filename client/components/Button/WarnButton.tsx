import BaseButton, { BaseButtonProps, BaseButtonStyled } from './BaseButton';
import styled from 'styled-components';

const CustomStyledButton = styled(BaseButtonStyled)`
  color: rgb(255, 255, 255);
  background: linear-gradient(rgb(226, 47, 47), rgb(207, 43, 43))
    rgb(226, 47, 47);
  border-color: rgb(207, 43, 43);

  &:hover {
    border-color: rgb(189, 39, 39);
    background: rgb(207, 43, 43);
  }
  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(226, 47, 47, 0.64) 0px 0px 0px 4px;
  }
  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(226, 47, 47, 0.24) 0px 0px 0px 4px;
  }
`;

const WarnButton = (props: Omit<BaseButtonProps, 'ButtonWrapper'>) => {
  return <BaseButton {...props} ButtonWrapper={CustomStyledButton} />;
};

export default WarnButton;
