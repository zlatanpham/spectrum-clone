import { storiesOf } from '@storybook/react';
import React from 'react';
import SidebarMenuItem from '.';
import IconAnalytics from 'components/icons/IconAnalytics';
import IconControls from 'components/icons/IconControls';

storiesOf('components/SidebarMenuItem', module).add('Basic', () => (
  <>
    <SidebarMenuItem placeholder={<IconAnalytics size={32} />} href="/" active>
      Item Child
    </SidebarMenuItem>
    <SidebarMenuItem
      placeholder={<IconControls size={32} />}
      href="/"
      active={false}
    >
      Item Child
    </SidebarMenuItem>
  </>
));
