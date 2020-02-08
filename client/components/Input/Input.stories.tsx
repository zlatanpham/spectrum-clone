import { storiesOf } from '@storybook/react';
import React from 'react';
import Input from '.';

storiesOf('components/Input', module).add('Basic', () => (
  <div className="p-5">
    <Input placeholder="Input size medium..." />
    <div className="mt-2"></div>
    <Input inputSize="small" placeholder="Input size small..." />
    <div className="mt-2"></div>
    <Input
      inputSize="small"
      inputStyle="thin"
      placeholder="Input base style..."
    />
  </div>
));
