import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  ${tw`border-r border-gray-300 min-h-screen`}
`;

const menuItems = [
  { href: '/new/post', text: 'New Post' },
  { href: '/explore', text: 'Explore' },
  { href: '/users/me', text: 'Profile' },
];

const Sidebar = () => {
  return (
    <Container>
      <ul>
        {menuItems.map(({ href, text }) => (
          <li key={href}>
            <Link href={href}>
              <a className="text-black block px-4 py-2">{text}</a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="border-t border-grey-300 my-3"></div>
      <Link href="/new/community">
        <a
          title="New community"
          className="bg-white text-black inline-block px-4 py-2 rounded"
        >
          <button>Create a community</button>
        </a>
      </Link>
    </Container>
  );
};

export default Sidebar;
