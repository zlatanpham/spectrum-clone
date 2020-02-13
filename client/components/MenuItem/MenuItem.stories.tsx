import { storiesOf } from '@storybook/react';
import React from 'react';
import MenuItem from '.';

storiesOf('components/MenuItem', module).add('Basic', () => (
  <>
    <MenuItem>
      <div className="h-full flex items-center pl-4 font-bold text-sm">
        Item Child
      </div>
    </MenuItem>
    <MenuItem active>
      <div className="h-full flex items-center pl-4 font-bold text-sm">
        Item Child
      </div>
    </MenuItem>
  </>
));
