import React, { useState } from 'react';
import SingleColumnLayout from 'components/Layout/SingleColumnLayout';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import tailwind from '../../../tailwind';
import StepOne from 'components/CreateCommunityForm/StepOne';

const theme = tailwind.theme;

const StepWrapper = styled.div`
  ${tw`p-6 relative flex items-center justify-between`}
`;

const StepDivider = styled.span`
  ${tw`absolute bg-gray-300`}
  height: 2px;
  top: 50%;
  z-index: 1;
  left: 24px;
  right: 24px;
`;

const Step = styled.div<{ isActive: boolean }>`
  ${tw`font-bold flex-none h-8 w-8 border-2 rounded-full flex items-center justify-center z-10 bg-white`}
  color: ${props =>
    props.isActive ? theme.colors.purple[500] : theme.colors.gray};
  border-color: ${props =>
    props.isActive ? theme.colors.purple[500] : theme.colors.gray[300]};
  box-shadow: #fff 0px 0px 0px 4px;
`;

const Title = styled.h1`
  ${tw`text-secondary text-2xl text-left px-6 pt-6 pb-2 font-black`}
  letter-spacing: -0.1px;
`;

const steps = [
  {
    key: 'step-1',
    name: 1,
  },
  {
    key: 'step-2',
    name: 2,
  },
  {
    key: 'step-3',
    name: 3,
  },
];

export default function NewCommunity() {
  const [activeStep] = useState('step-1');

  function submitForm(value: any) {
    console.log(value);
  }

  return (
    <SingleColumnLayout>
      <StepWrapper>
        <StepDivider />
        {steps.map(s => (
          <Step key={s.key} isActive={activeStep === s.key}>
            {s.name}
          </Step>
        ))}
      </StepWrapper>
      <Title>Create a community</Title>
      <h3 className="font-medium text-gray leading-normal pt-2 px-6 pb-4">
        Creating a community on Spectrum is free, forever. To get started, tell
        us more about your community below.
      </h3>
      <StepOne onSubmit={submitForm} />
    </SingleColumnLayout>
  );
}
