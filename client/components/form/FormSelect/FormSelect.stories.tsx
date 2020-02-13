import { storiesOf } from '@storybook/react';
import React from 'react';
import { Formik, Form } from 'formik';
import FormSelect from '.';
import { OptionItem } from 'components/Select';

const filterOptions: OptionItem[] = [
  { name: 'Popular', value: 'popular' },
  { name: 'Latest', value: 'latest' },
];

const communityOptions: OptionItem[] = [
  { name: 'Choose a community', value: '' },
  { name: 'React', value: 'react' },
  { name: 'Sketch', value: 'sketch' },
];

storiesOf('components/form/Select', module).add('Basic', () => (
  <div className="p-5">
    <Formik
      initialValues={{ filter: 'popular', community: '' }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {({ values }) => (
        <Form>
          <FormSelect name="filter" options={filterOptions} />
          <FormSelect
            name="community"
            options={communityOptions}
            scheme="purple"
          />
          <pre className="mt-5 bg-gray-300 px-3 py-2 rounded">
            {JSON.stringify(values)}
          </pre>
        </Form>
      )}
    </Formik>
  </div>
));
