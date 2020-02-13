import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import IconDownCaret from 'components/icons/IconDownCaret';

export interface OptionItem {
  name: string;
  value: string;
}

const GrayContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

const GraySelect = styled.select`
  box-shadow: none;
  -webkit-appearance: none;
  font-weight: 600;
  font-size: 15px;
  color: rgb(36, 41, 46);
  text-align: center;
  text-align-last: center;
  padding: 8px 40px 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 236, 237);
  border-image: initial;
  border-radius: 32px;
  overflow: hidden;
  background: none rgb(255, 255, 255);
  outline: none;

  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(235, 236, 237) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
    outline-offset: -2px;
  }

  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgb(178, 179, 180) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }

  &:hover {
    cursor: pointer;
    background: rgb(246, 247, 248);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  z-index: 1;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  pointer-events: none;
  color: rgb(103, 113, 122);
`;

const PurpleSelect = styled.select<{ isNotEmpty: boolean }>`
  display: inline-block;
  box-shadow: none;
  -webkit-appearance: none;
  cursor: pointer;
  margin-left: 8px;
  box-sizing: border-box;
  font-weight: 500;
  font-size: 14px;
  max-height: 38px;
  max-width: 212px;
  line-height: 1.2;
  color: ${props =>
    props.isNotEmpty ? 'rgb(36, 41, 46)' : 'rgb(123, 22, 255)'};
  background-color: ${props =>
    props.isNotEmpty ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)'};
  border-color: ${props =>
    props.isNotEmpty ? 'rgb(235, 236, 237)' : 'rgb(123, 22, 255)'};
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-radius: 8px;
  outline: none;

  &:active {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.64) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
  }

  &:focus {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 2px,
      rgba(123, 22, 255, 0.24) 0px 0px 0px 4px;
    transition: box-shadow 0.2s ease-in-out 0s;
    outline: -webkit-focus-ring-color auto 5px;
  }
`;

export interface SelectProps {
  options: OptionItem[];
  value?: string;
  onChange?: (value: string) => void;
  scheme?: 'gray' | 'purple';
}

const Select = ({
  options,
  value,
  onChange,
  scheme = 'gray',
  ...rest
}: SelectProps) => {
  console.log(value);
  const optionsRender = options.map(({ value, name }) => (
    <option key={value} value={value}>
      {name}
    </option>
  ));

  if (scheme === 'purple') {
    return (
      <PurpleSelect
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        isNotEmpty={value !== ''}
        {...rest}
      >
        {optionsRender}
      </PurpleSelect>
    );
  }

  return (
    <GrayContainer>
      <GraySelect
        value={value}
        onChange={e => {
          onChange && onChange(e.target.value);
        }}
        {...rest}
      >
        {optionsRender}
      </GraySelect>
      <IconWrapper>
        <IconDownCaret size={22} />
      </IconWrapper>
    </GrayContainer>
  );
};

export default Select;
