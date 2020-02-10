import { storiesOf } from '@storybook/react';
import React from 'react';
import Tooltip from '.';

storiesOf('components/Tooltip', module).add('Basic', () => (
  <div className="px-5 py-12">
    <Tooltip content="Tooltip">
      <span>Tooltip</span>
    </Tooltip>
  </div>
));
