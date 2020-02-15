import { storiesOf } from '@storybook/react';
import React from 'react';
import UserCard from '.';

storiesOf('components/UserCard', module).add('Basic', () => (
  <div className="px-5 py-12">
    <UserCard
      name="Bas Gareth"
      slug="druchtie"
      avatar={
        'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars2.githubusercontent.com%2Fu%2F51824794%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=ce1ce8508d8b9d399d8598da78286148'
      }
    />
  </div>
));
