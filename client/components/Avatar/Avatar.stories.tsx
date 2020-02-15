import { storiesOf } from '@storybook/react';
import React from 'react';
import Avatar from './Avatar';

const url =
  'https://spectrum.imgix.net/communities/2fe98231-7348-47a2-87ed-5c4676d58031/ts.png.0.8248774242525023?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=1763ad7612fdf257b0cc80dfd035e956';

storiesOf('components/Avatar', module).add('Basic', () => (
  <div className="p-5 bg-white">
    <Avatar url={url} squared />
    <div className="my-4"></div>
    <Avatar url={url} size={60} squared />
    <div className="my-4"></div>
    <Avatar url={url} size={48} />
  </div>
));
