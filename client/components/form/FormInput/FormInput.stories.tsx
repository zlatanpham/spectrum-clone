import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormInput from '.';

storiesOf('components/form/Input', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {props => (
        <Form>
          <FormInput
            placeholder="Input size medium..."
            label="Input Label"
            name="name"
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
));
