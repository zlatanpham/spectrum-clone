import React from 'react';
import SettingHeader, { SettingHeaderProps } from 'components/SettingHeader';

const userProps: SettingHeaderProps = {
  avatarUrl:
    'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12707960%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=4ef2a2d8631db81bfb09fb6fe9655d93',
  title: 'My Settings',
  returnLink: '/',
  returnText: 'Return to profile',
};

export default function UserSettings() {
  return (
    <div className="w-full">
      <SettingHeader {...userProps} />
    </div>
  );
}
