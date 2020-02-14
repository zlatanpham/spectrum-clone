import { storiesOf } from '@storybook/react';
import React from 'react';
import Button from '.';

storiesOf('components/Button', module).add('Button', () => (
  <div className="flex flex-wrap">
    <div className="w-1/4 p-4 m-4">
      <Button type={'white-icon'} disabled>
        Test deploy
      </Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'primary'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'white'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'outline'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'primary-outline'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'white-outine'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'warn-hover-outline'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'text'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'facebook'}>Test deploy</Button>
    </div>
    <div className="w-1/4 p-4 m-4">
      <Button type={'twitter'}>Test deploy</Button>
    </div>
  </div>
));
