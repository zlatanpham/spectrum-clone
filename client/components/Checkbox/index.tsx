import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import IconCheckbox from '../icons/IconCheckbox';
import IconCheckmark from '../icons/IconCheckmark';

export type CheckboxProps = {} & React.HTMLAttributes<HTMLInputElement>;

const Label = styled.label`
  ${tw`flex items-center hover:text-purple-300 cursor-pointer`};
`;

const HiddenInput = styled.input`
  ~ .checkbox-icon-mark {
    ${tw`hidden text-purple-300`}
  }
  ~ .checkbox-text {
    ${tw`ml-1 font-medium text-sm`}
  }
  &:checked {
    ~ .checkbox-icon {
      display: none;
    }
    ~ .checkbox-icon-mark {
      display: block;
    }
    ~ .checkbox-text {
      ${tw`text-purple-300`}
    }
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({ children, ...props }) => {
  return (
    <Label>
      <HiddenInput className="hidden" type="checkbox" {...props} />
      <IconCheckbox className="checkbox-icon" />
      <IconCheckmark className="checkbox-icon-mark" />
      {children && <div className="checkbox-text">{children}</div>}
    </Label>
  );
};

export default Checkbox;
