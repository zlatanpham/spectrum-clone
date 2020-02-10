import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from '.';

storiesOf('components/Alert', module).add('Basic', () => (
  <div className="p-5">
    <Alert type="warning" className="mb-3 w-64">
      <div>Warning</div>
    </Alert>
    <Alert type="error" className="mb-3 w-64">
      <div>Error</div>
    </Alert>
    <Alert type="success" className="mb-3 w-64">
      <div>Success</div>
    </Alert>
    <Alert type="info" className="w-64">
      <div>Info</div>
    </Alert>
  </div>
));
