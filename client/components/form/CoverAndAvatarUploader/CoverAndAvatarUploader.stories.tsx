import { storiesOf } from '@storybook/react';
import React from 'react';
import CoverAndAvatarUploader from '.';
import { Formik, Form } from 'formik';

storiesOf('components/form/CoverAndAvatarUploader', module)
  .add('Basic', () => (
    <div className="p-5">
      <Formik
        initialValues={{ cover: '', avatar: '' }}
        onSubmit={values => alert(JSON.stringify(values))}
      >
        {({ values }) => (
          <Form>
            <CoverAndAvatarUploader coverName="cover" avatarName="avatar" />
            <pre className="mt-10 bg-gray-300 px-3 py-2 rounded">
              {JSON.stringify(values)}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  ))
  .add('Squared Avatar', () => (
    <div className="p-5">
      <Formik
        initialValues={{ cover: '', avatar: '' }}
        onSubmit={values => alert(JSON.stringify(values))}
      >
        {({ values }) => (
          <Form>
            <CoverAndAvatarUploader
              coverName="cover"
              avatarName="avatar"
              avatarSquared
            />
            <pre className="mt-10 bg-gray-300 px-3 py-2 rounded">
              {JSON.stringify(values)}
            </pre>
          </Form>
        )}
      </Formik>
    </div>
  ));
