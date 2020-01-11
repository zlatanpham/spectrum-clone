/* eslint-disable import/first */
import { storiesOf } from '@storybook/react';
import React from 'react';
import ExampleComponent from '.';

storiesOf('ExampleComponent', module).add('Basic', () => (
  <ExampleComponent>Test</ExampleComponent>
));
