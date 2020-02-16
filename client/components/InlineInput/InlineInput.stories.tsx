import { storiesOf } from '@storybook/react';
import React from 'react';
import InlineInput from '.';

storiesOf('components/InlineInput', module).add('Basic', () => (
  <div className="p-5">
    <InlineInput prefix="spectrum-clone.chat" />
  </div>
));
