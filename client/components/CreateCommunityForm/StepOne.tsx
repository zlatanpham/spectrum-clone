import React, { useState } from 'react';
import PrimaryOutlineButton from 'components/Button/PrimaryOutlineButton';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import CoverAndAvatarUploader from 'components/form/CoverAndAvatarUploader';
import FormInput from 'components/form/FormInput';
import FormInlineInput from 'components/form/FormInlineInput';
import { Formik, Form } from 'formik';
import Checkbox from 'components/Checkbox';
import cs from 'classnames';

// import taildwind from '../../tailwind';
// const colors = taildwind.theme.colors;

export interface FormValues {
  cover: string;
  avatar: string;
  name: string;
  chat: string;
  description: string;
  website: string;
  isPublic: boolean;
  isRedTerm: boolean;
}

const initialValues: FormValues = {
  avatar: '',
  cover: '',
  name: '',
  chat: '',
  description: '',
  website: '',
  isPublic: false,
  isRedTerm: false,
};

export interface StepOneProps {
  onSubmit: (values: any) => void;
}

const CreateButton = styled(PrimaryOutlineButton)<{ isValid: boolean }>`
  opacity: ${props => (props.isValid ? 1 : 0.6)};
`;

const ButtonBlock = styled.div`
  ${tw`border-t border-t-2 border-gray-300 p-6 flex justify-end`}
`;

const FormItem = styled.div`
  ${tw`pt-3 w-full`}
`;

const Radio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 8px;
  height: 18px;
  width: 18px;
  border-radius: 16px;
  border-style: solid;
  border-width: 2px;
  border-color: rgb(235, 236, 237);
  cursor: pointer;

  &:checked {
    box-shadow: rgb(123, 22, 255) 0px 0px 0px 4px inset;
    border-style: solid;
    border-color: rgb(123, 22, 255);
    border-image: initial;
  }

  &:focus {
    outline: 0;
  }
`;

const DescInput = styled(FormInput)`
  ${tw`w-full`}
  height: 45px !important;
`;

const StepOne = ({ onSubmit }: StepOneProps) => {
  const [radio, setRadio] = useState('public');

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(JSON.stringify(values))}
      >
        {({ values }) => (
          <>
            <Form className="p-4">
              <CoverAndAvatarUploader
                coverName="cover"
                avatarName="avatar"
                avatarSquared
              />
              <FormItem>
                <FormInput
                  label="What is your community called?"
                  name="name"
                  type="text"
                  placeholder=""
                  className="w-full"
                />
              </FormItem>
              <FormInlineInput prefix="spectrum.chat" name="chat" type="text" />
              <div className="mt-6">
                <DescInput
                  label="Describe it in 140 characters or less"
                  name="description"
                  type="text"
                  placeholder=""
                  inputSize="medium"
                />
              </div>
              <FormItem>
                <FormInput
                  label="Optional: Add your community’s website"
                  name="website"
                  type="text"
                  placeholder=""
                  className="w-full"
                />
              </FormItem>
              <div className="border-2 border-gray-300 rounded flex mt-4">
                <div
                  className={cs('w-1/2 border-r-2 border-gray-300 p-4', {
                    'text-gray bg-gray-100': radio !== 'public',
                  })}
                >
                  <div className="flex items-center text-15 font-medium">
                    <Radio
                      type="radio"
                      id="public"
                      name="public"
                      value="public"
                      onChange={() => setRadio('public')}
                      checked={radio === 'public'}
                    />
                    <label
                      htmlFor="public"
                      className={radio === 'public' ? '' : 'text-gray'}
                    >
                      Public
                    </label>
                  </div>
                  <p className="text-sm mt-2">
                    Anyone can join and view conversations. Public communities
                    will appear in search results, and can appear as suggested
                    communities to non-members. Conversations will be search
                    indexed.
                  </p>
                </div>
                <div
                  className={cs('w-1/2 p-4', {
                    'text-gray bg-gray-100': radio !== 'private',
                  })}
                >
                  <div className="flex items-center text-15 font-medium">
                    <Radio
                      type="radio"
                      id="private"
                      name="private"
                      value="private"
                      onChange={() => setRadio('private')}
                      checked={radio === 'private'}
                    />
                    <label
                      htmlFor="private"
                      className={radio === 'private' ? '' : 'text-gray'}
                    >
                      Private
                    </label>
                  </div>
                  <p className="text-sm mt-2">
                    Anyone can join and view conversations. Public communities
                    will appear in search results, and can appear as suggested
                    communities to non-members. Conversations will be search
                    indexed.
                  </p>
                </div>
              </div>
              <FormItem>
                <Checkbox>
                  <span>
                    I have read the{' '}
                    <a href="#" className="underline">
                      Spectrum Code of Conduct
                    </a>{' '}
                    and agree to enforce it in my community.
                  </span>
                </Checkbox>
              </FormItem>
            </Form>
            <ButtonBlock>
              <CreateButton isValid={!!values.name && !!values.isRedTerm}>
                Create Community & Continue
              </CreateButton>
            </ButtonBlock>
          </>
        )}
      </Formik>
    </div>
  );
};

export default StepOne;
