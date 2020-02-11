import React from 'react';
import tw from 'tailwind.macro';
import styled from 'styled-components';
import SidebarMenuItem from './SidebarMenuItem';
import IconPost from 'components/icons/IconPost';
import IconPlus from 'components/icons/IconPlus';
import IconExplore from 'components/icons/IconExplore';
import CommunityBadge from './CommunityBadge';

const Container = styled.div`
  ${tw`border-r border-gray-300 min-h-screen`}
`;

const menuItems = [
  { href: '/new/post', text: 'New Post', icon: <IconPost size={32} /> },
  { href: '/explore', text: 'Explore', icon: <IconExplore size={32} /> },
];

const sampleCommunityList = [
  {
    name: 'Styled Components',
    slug: 'styled-components',
    image:
      'https://spectrum.imgix.net/default_images/profile-peach.png?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=8dcf4ecb9b00ba9d544f08c1a6e75235',
  },
  {
    name: 'Design',
    slug: 'design',
    image:
      'https://spectrum.imgix.net/communities/58f4a741-934b-4754-87d5-ef980d102340/596b97d81cb01391fb3a9ddd127185cd.png.0.1081642064692867?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=cfc7872b4298f963de59f25590a59fac',
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    image:
      'https://spectrum.imgix.net/communities/2fe98231-7348-47a2-87ed-5c4676d58031/ts.png.0.8248774242525023?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=1763ad7612fdf257b0cc80dfd035e956',
  },
];

const Sidebar = () => {
  return (
    <Container>
      <ul>
        {menuItems.map(({ href, text, icon }) => (
          <li key={href}>
            <SidebarMenuItem placeholder={icon} href={href} active={false}>
              {text}
            </SidebarMenuItem>
          </li>
        ))}
        <li>
          <SidebarMenuItem
            placeholder={
              <img
                width="32px"
                height="32px"
                className="rounded-full"
                src="https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F12707960%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=67f01cf25b4520650ff724de1eb54f45"
              />
            }
            href={'/users/me'}
            active={true}
          >
            Profile
          </SidebarMenuItem>
        </li>
      </ul>
      <div className="border-t border-b border-gray-300 my-3 py-3">
        <ul>
          {sampleCommunityList.map(({ name, slug, image }) => (
            <SidebarMenuItem
              key={slug}
              placeholder={<CommunityBadge imageUrl={image} />}
              href={`/${slug}`}
              active={false}
            >
              {name}
            </SidebarMenuItem>
          ))}
        </ul>
      </div>
      <SidebarMenuItem
        placeholder={<IconPlus size={32} />}
        href="/new/community"
        active={false}
      >
        Create a community
      </SidebarMenuItem>
    </Container>
  );
};

export default Sidebar;
