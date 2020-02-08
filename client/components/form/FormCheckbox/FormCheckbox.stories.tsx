import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormCheckbox from '.';

storiesOf('components/form/Checkbox', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ agree: '' }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {({ values }) => (
        <Form>
          <FormCheckbox name="agree">I agree with the policy</FormCheckbox>
          <pre className="mt-5 bg-gray-300 px-3 py-2 rounded">
            {JSON.stringify(values)}
          </pre>
        </Form>
      )}
    </Formik>
  </div>
));
