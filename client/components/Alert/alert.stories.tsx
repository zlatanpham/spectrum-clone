import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from '.';

storiesOf('components/Alert', module).add('Basic', () => (
  <div className="p-5">
    <Alert type="warning" className="mb-3" style={{ width: '500px' }}>
      <div>
        <strong className="text-black">
          Trying to mute a specific conversation?
        </strong>{' '}
        You can turn off email notifications for individual threads by clicking
        on the notification icon
      </div>
    </Alert>
    <Alert type="error" className="mb-3" style={{ width: '500px' }}>
      <div>
        <strong className="text-black">
          Trying to mute a specific conversation?
        </strong>{' '}
        You can turn off email notifications for individual threads by clicking
        on the notification icon
      </div>
    </Alert>
    <Alert type="success" className="mb-3" style={{ width: '500px' }}>
      <div>
        <strong className="text-black">
          Trying to mute a specific conversation?
        </strong>{' '}
        You can turn off email notifications for individual threads by clicking
        on the notification icon
      </div>
    </Alert>
    <Alert type="info" style={{ width: '500px' }}>
      <div>
        <strong className="text-black">
          Trying to mute a specific conversation?
        </strong>{' '}
        You can turn off email notifications for individual threads by clicking
        on the notification icon
      </div>
    </Alert>
  </div>
));
