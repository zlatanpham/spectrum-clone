import { storiesOf } from '@storybook/react';
import React from 'react';
import Spinner from '.';

storiesOf('components/Spinner', module).add('Basic', () => (
  <div className="p-10 flex items-center">
    <Spinner />
    <div className="w-10"></div>
    <Spinner scheme="gray" />
  </div>
));
