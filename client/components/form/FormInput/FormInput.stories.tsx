import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '.';

storiesOf('components/form/Input', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ name: '' }}
      validate={values => {
        if (!values.name) {
          return {
            name: 'Name is required!',
          };
        }

        if (values.name.length < 10) {
          return {
            name: 'The mininum length should have more than 10 characters',
          };
        }

        return {};
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {() => (
        <Form>
          <FormInput
            label="Name"
            name="name"
            type="text"
            placeholder="Your name"
            inputSize="small"
          />
          <div className="mt-5">
            <button
              className="rounded-full px-4 py-2 bg-purple-300 text-white"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
));
