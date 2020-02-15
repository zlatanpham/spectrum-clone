import React, { useState } from 'react';

import tw from 'tailwind.macro';
import styled from 'styled-components';
import Select, { OptionItem } from 'components/Select';

const Header = styled.header`
  ${tw`bg-gray-200 px-4 py-2 border border-b`}
`;

const sortOptions: OptionItem[] = [
  { name: 'Latest', value: 'latest' },
  { name: 'Popular', value: 'popular' },
];

export default function ThreadHeader() {
  const [sortBy, setSortBy] = useState('latest');

  return (
    <Header>
      <Select options={sortOptions} value={sortBy} onChange={setSortBy} />
    </Header>
  );
}
