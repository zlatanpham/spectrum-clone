import { storiesOf } from '@storybook/react';
import React from 'react';
import Search from '.';

storiesOf('components/Search', module).add('Basic', () => (
  <div className="p-5">
    <Search placeholder="Search" />
  </div>
));
