import React from 'react';
import { render } from '@testing-library/react';
import Alert from '.';

describe('Alert', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Alert type="error" className="mb-3" style={{ width: '500px' }}>
        <strong className="text-black">
          Trying to mute a specific conversation?
        </strong>{' '}
        You can turn off email notifications for individual threads by clicking
        on the notification icon
      </Alert>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
