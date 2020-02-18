import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormInlineInput from '.';

storiesOf('components/form/FormInlineInput', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ name: '' }}
      validate={values => {
        if (!values.name) {
          return {
            name: 'Name is required!',
          };
        }

        if (!/^[a-zA-Z]+$/.test(values.name) || values.name.length > 20) {
          return {
            name:
              'Community name has to be between 1 and 20 characters long and can`t have invalid characters.',
          };
        }

        return {};
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {() => (
        <Form>
          <FormInlineInput prefix="spectrum-clone.io" name="name" type="text" />
          <div className="mt-5">
            <button
              className="rounded-full px-4 py-2 bg-purple-400 text-white"
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
