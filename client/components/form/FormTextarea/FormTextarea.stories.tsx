import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormTextarea from '.';

storiesOf('components/form/Textarea', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ message: '' }}
      validate={values => {
        if (!values.message) {
          return {
            message: 'Required!',
          };
        }

        if (values.message.length < 50) {
          return {
            message: 'The mininum length should have more than 50 characters',
          };
        }

        return {};
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {() => (
        <Form>
          <FormTextarea
            label="Message"
            name="message"
            placeholder="Say something..."
            textareaStyle="thin"
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
