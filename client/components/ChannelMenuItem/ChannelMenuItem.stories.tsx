import { storiesOf } from '@storybook/react';
import React from 'react';
import ChannelMenuItem from '.';

storiesOf('components/ChannelMenuItem', module).add('Basic', () => (
  <>
    <ChannelMenuItem
      href="/"
      isAll={true}
      isMember={false}
      name="All your channels"
      isActive
    />
    <ChannelMenuItem
      href="/"
      isAll={false}
      isMember={true}
      name="General"
      isActive={false}
    />
    <ChannelMenuItem
      href="/"
      isAll={false}
      isMember={false}
      name="Pass The Pen"
      isActive={false}
    />
  </>
));
