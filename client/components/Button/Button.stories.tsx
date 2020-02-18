import { storiesOf } from '@storybook/react';
import React from 'react';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';
import PrimaryOutlineButton from './PrimaryOutlineButton';
import WarnButton from './WarnButton';
import WhiteButton from './WhiteButton';
import TransparentButton from './TransparentButton';

storiesOf('components/Button', module).add('Button', () => (
  <>
    <div className="p-5 bg-white flex">
      <PrimaryButton>Hello World</PrimaryButton>
      <OutlineButton>Hello World</OutlineButton>
      <TransparentButton>Hello World</TransparentButton>
      <PrimaryOutlineButton>Hello World</PrimaryOutlineButton>
      <WarnButton>Hello World</WarnButton>
      <WhiteButton>Hello World</WhiteButton>
    </div>
    <div className="p-5 bg-white flex">
      <PrimaryButton size="small">Hello World</PrimaryButton>
      <OutlineButton size="small">Hello World</OutlineButton>
      <TransparentButton size="small">Hello World</TransparentButton>
      <PrimaryOutlineButton size="small">Hello World</PrimaryOutlineButton>
      <WarnButton size="small">Hello World</WarnButton>
      <WhiteButton size="small">Hello World</WhiteButton>
    </div>
  </>
));
