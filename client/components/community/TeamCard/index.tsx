import React from 'react';
import Card from 'components/Card';
import UserCard from 'components/UserCard';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import OutlineButton from 'components/Button/OutlineButton';

const CustomLi = styled.li`
  ${tw`bg-white hover:bg-gray-100 block flex justify-between px-3 py-3 border-b border-gray-200 relative cursor-pointer items-center`}
  transition: all 0.2s ease;
`;

const sampleMemberlList = [
  {
    name: 'Jans Vertongen',
    slug: 'jansv',
    avatar:
      'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars1.githubusercontent.com%2Fu%2F46239581%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=e860d96ac3adc19662493ce8a280c55f',
  },
  { name: 'Ivan Bastic', slug: 'ivbatic', avatar: '' },
  {
    name: 'Sashko Byron',
    slug: 'stubyron',
    avatar:
      'https://spectrum.imgix.net/users/b919bc61-4dbf-4845-912c-76c003567823/IMG_1039.JPG.0.5330508919211898?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=687f46c2ed2ca42ef087a2f6dbff9cbf',
  },
];

export default function TeamCard() {
  return (
    <Card title="Team" className="mb-3">
      <ul>
        {sampleMemberlList.map(item => (
          <CustomLi key={item.slug}>
            <Link href={`/users/${item.slug}`}>
              <a className="absolute inset-0"></a>
            </Link>
            <UserCard {...item}></UserCard>
            <OutlineButton size="small" style={{ width: 100 }}>
              Message
            </OutlineButton>
          </CustomLi>
        ))}
      </ul>
    </Card>
  );
}
