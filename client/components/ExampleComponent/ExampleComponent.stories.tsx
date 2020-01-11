import { storiesOf } from '@storybook/react';
import React from 'react';
import ExampleComponent from '.';

storiesOf('components/ExampleComponent', module).add('Basic', () => (
  <ExampleComponent>Test</ExampleComponent>
));
