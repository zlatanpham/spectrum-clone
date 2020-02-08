import { storiesOf } from '@storybook/react';
import React from 'react';
import Textarea from '.';

storiesOf('components/Textarea', module).add('Basic', () => (
  <div className="p-5">
    <Textarea placeholder="Textarea bold..." />
    <div className="mt-2"></div>
    <Textarea textareaStyle="thin" placeholder="Textarea thin..." />
    <div className="mt-2"></div>
    <Textarea placeholder="Textarea disabled" disabled />
  </div>
));
