import { storiesOf } from '@storybook/react';
import React from 'react';
import Card from '.';

storiesOf('components/Card', module).add('Basic', () => (
  <div className="w-1/4">
    <Card title="Community" className="m-5">
      <div className="p-4">Card content</div>
    </Card>
  </div>
));
