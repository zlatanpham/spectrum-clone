import { storiesOf } from '@storybook/react';
import React from 'react';
import ThreadSkeletonLoading from '.';

storiesOf('components/ThreadSkeletonLoading', module)
  .add('Default', () => <ThreadSkeletonLoading />)
  .add('Custom', () => (
    <ThreadSkeletonLoading width={1000} height={200} lineText={7} />
  ));
