import React from 'react';
import SettingHeader, { SettingHeaderProps } from 'components/SettingHeader';

const communityProps: SettingHeaderProps = {
  avatarUrl:
    'https://spectrum.imgix.net/communities/2fe98231-7348-47a2-87ed-5c4676d58031/ts.png.0.8248774242525023?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=1763ad7612fdf257b0cc80dfd035e956',
  title: 'Settings',
  returnLink: '/',
  returnText: 'Return to TypeScript',
  squared: true,
};

export default function CommunitySettings() {
  return (
    <div className="w-full">
      <SettingHeader {...communityProps} />
    </div>
  );
}
