import { storiesOf } from '@storybook/react';
import React from 'react';
import Checkbox from '.';

storiesOf('components/Checkbox', module).add('Basic', () => (
  <div className="p-5">
    <Checkbox />
    <div>
      <Checkbox>I agree with the policy</Checkbox>
    </div>
  </div>
));
