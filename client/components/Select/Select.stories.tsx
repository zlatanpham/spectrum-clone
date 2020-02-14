import { storiesOf } from '@storybook/react';
import React from 'react';
import Select, { OptionItem } from '.';

const filterOptions: OptionItem[] = [
  { name: 'Popular', value: 'popular' },
  { name: 'Latest', value: 'latest' },
];

const communityOptions: OptionItem[] = [
  { name: 'Choose a community', value: '' },
  { name: 'React', value: 'react' },
  { name: 'Sketch', value: 'sketch' },
];

const Example = () => {
  const [filter, setFilter] = React.useState('popular');
  const [community, setCommunity] = React.useState('');
  return (
    <>
      <Select
        options={filterOptions}
        value={filter}
        onChange={setFilter}
      ></Select>
      <Select
        scheme="purple"
        options={communityOptions}
        value={community}
        onChange={setCommunity}
      ></Select>
    </>
  );
};

storiesOf('components/Select', module).add('Basic', () => <Example />);
