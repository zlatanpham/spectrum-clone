import BaseButton, { BaseButtonProps } from './BaseButton';
import { CustomStyledTransparentButton } from './TransparentButton';
import styled from 'styled-components';

const CustomStyledButton = styled(CustomStyledTransparentButton)`
  background: white;
  &:hover {
    background: rgb(235, 236, 237);
  }
`;

const WhiteButton = (props: Omit<BaseButtonProps, 'ButtonWrapper'>) => {
  return <BaseButton {...props} ButtonWrapper={CustomStyledButton} />;
};

export default WhiteButton;
