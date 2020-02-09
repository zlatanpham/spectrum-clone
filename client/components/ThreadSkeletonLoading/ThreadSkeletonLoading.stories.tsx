import { storiesOf } from '@storybook/react';
import React from 'react';
import ThreadSkeletonLoading from '.';

storiesOf('components/ThreadSkeletonLoading', module).add('Default', () => (
  <div className="bg-white w-1/2">
    <ThreadSkeletonLoading />
  </div>
));
