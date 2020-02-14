import { storiesOf } from '@storybook/react';
import React from 'react';
import Tooltip from '.';

storiesOf('components/Tooltip', module).add('Basic', () => (
  <div className="px-5 py-12">
    <Tooltip content="Top">
      <span className="px-5">Top</span>
    </Tooltip>
    <Tooltip content="Bottom" placement="bottom">
      <span className="px-5">Bottom</span>
    </Tooltip>
    <Tooltip content="Left" placement="left">
      <span className="px-5">Left</span>
    </Tooltip>
    <Tooltip content="Right" placement="right">
      <span className="px-5">Right</span>
    </Tooltip>
  </div>
));
