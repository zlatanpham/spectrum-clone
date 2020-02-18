import { storiesOf } from '@storybook/react';
import React from 'react';
import SettingHeader, { SettingHeaderProps } from '.';

const userProps: SettingHeaderProps = {
  avatarUrl:
    'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12707960%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=4ef2a2d8631db81bfb09fb6fe9655d93',
  title: 'My Settings',
  returnLink: '/',
  returnText: 'Return to profile',
};

const communityProps: SettingHeaderProps = {
  avatarUrl:
    'https://spectrum.imgix.net/communities/2fe98231-7348-47a2-87ed-5c4676d58031/ts.png.0.8248774242525023?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=1763ad7612fdf257b0cc80dfd035e956',
  title: 'Settings',
  returnLink: '/',
  returnText: 'Return to TypeScript',
  squared: true,
};

storiesOf('components/SettingHeader', module).add('Basic', () => (
  <>
    <SettingHeader {...userProps} />
    <SettingHeader {...communityProps} />
  </>
));
