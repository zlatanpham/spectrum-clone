import React from 'react';
import Card from 'components/Card';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Avatar from 'components/Avatar/Avatar';
import IconViewForward from 'components/icons/IconViewForward';

const CustomLi = styled.li`
  ${tw`bg-white hover:bg-gray-100 block flex justify-between px-3 py-3 border-b border-gray-200 relative cursor-pointer items-center`}
  transition: all 0.2s ease;
`;

const communityList = [
  {
    name: 'React',
    slug: 'React',
    avatar:
      'https://spectrum.imgix.net/communities/102b08e1-f26e-4cda-b252-03258776bc14/73deb70c-c3d7-4812-b709-f4aab92591d2-react.jpg?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=bf1f6046bf1a475776a5a32357fb4b5a',
  },
  { name: 'Unknown', slug: 'unknown', avatar: '' },
  {
    name: 'Bit',
    slug: 'bit',
    avatar:
      'https://spectrum.imgix.net/communities/8b24c436-8118-4f2b-a1e9-04893a7bab27/S18uMHHeQ-Linkedin%20logo%2001.png?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=5b134c053ba1955ec2f225720e38b9bf,',
  },
];

export default function CommunityCard() {
  return (
    <Card title="Communities" className="mb-3">
      <ul>
        {communityList.map(item => (
          <CustomLi key={item.slug}>
            <Link href={`/${item.slug}`}>
              <a className="absolute inset-0"></a>
            </Link>
            <div className="flex items-center">
              <Avatar
                url={item.avatar || '/img/community-avatar.jpeg'}
              ></Avatar>
              <span className="ml-4 text-15 font-semibold text-secondary">
                {item.name}
              </span>
            </div>
            <IconViewForward size={22} />
          </CustomLi>
        ))}
      </ul>
    </Card>
  );
}
