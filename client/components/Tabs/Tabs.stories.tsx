import { storiesOf } from '@storybook/react';
import React from 'react';
import Tabs from '.';

const { TabPane } = Tabs;

storiesOf('components/Tabs', module)
  .add('Basic', () => (
    <Tabs
      options={[
        { name: 'Posts', key: 'posts' },
        { name: 'Activity', key: 'activity' },
        { name: 'Search', key: 'search' },
      ]}
      current="posts"
    >
      <TabPane render={<div className="p-4">hello</div>} name="posts"></TabPane>
      <TabPane
        render={<div className="p-4">Activities</div>}
        name="activity"
      ></TabPane>
      <TabPane
        render={<div className="p-4">Search</div>}
        name="search"
      ></TabPane>
    </Tabs>
  ))
  .add('Fullwidth', () => (
    <Tabs
      options={[
        { name: 'Posts', key: 'posts' },
        { name: 'Activity', key: 'activity' },
        { name: 'Search', key: 'search' },
      ]}
      current="posts"
      fullwidth
    >
      <TabPane render={<div className="p-4">hello</div>} name="posts"></TabPane>
      <TabPane
        render={<div className="p-4">Activities</div>}
        name="activity"
      ></TabPane>
      <TabPane
        render={<div className="p-4">Search</div>}
        name="search"
      ></TabPane>
    </Tabs>
  ));
