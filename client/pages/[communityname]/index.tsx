import React from 'react';
import RightSidebarLayout from 'components/Layout/RightSidebarLayout';
import { CommunityCard } from 'components/ProfileCard';
import ThreadItem from 'components/ThreadItem';
import ChannelsCard from 'components/community/ChannelsCard';

const community = {
  name: 'Styled Components',
  slug: 'styled-components',
  website: 'https://styled-components.com',
  metaData: {
    members: 1234,
    onlineMembers: 321,
  },
  communityPermissions: {
    isMember: true,
    isOwner: false,
    isModerator: false,
  },
  description:
    'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress!',
  profilePhoto:
    'https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/test.png.0.3184486404030735?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=77587b2e6b624982e2ca74773e8f5fea',
  coverPhoto:
    'https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/styled-components-gradient.png.0.3919079633731517?w=1280&h=384&dpr=2&q=100&expires=1577664000000&ixlib=js-1.4.1&s=b816b4d80a877b36fe1bf8d915a824f2',
};

const threads = [
  {
    data: {
      avatar:
        'https://spectrum.imgix.net/users/5fd9b9be-e3b0-40cd-92f9-fa08d4261264/db11a0af-5850-4458-a9e9-2da88a209358-ryYruko.jpg?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=3b0ec27af423eb69060cd0f26ed97bd4',
      channelName: 'General',
      comments: 7,
      likes: 12,
      desc: `Just an idea I've had kicking around for a while - a lot of people want to use named breakpoints when working with media queries, but CSS doesn't allow you to set and use custom properties and use them like @media (var(--my-breakpoint)) {} because CSS custom properties could be…`,
      title: 'Named Media Query Breakpoints in Plain CSS',
      name: 'Tommy hodgins',
      time: '182d',
    },
    href: '/design/react/how-to-not-sleep~987-654-321',
    viewed: true,
  },
  {
    data: {
      avatar:
        'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F4677417%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=c631e9ed0a0dc84210c47d2da73b1fd0',
      channelName: 'General',
      comments: 2,
      likes: 5,
      desc: `I apologize if this is not the place to post this. I searched, couldn't locate a vibrant css community outside this one here.
    Anyone know of a tutorial/excercise/examples of something that mimics this:
    https://us.puma.com/en/us/home?locale=en_US …`,
      title:
        'Notification bar at top, but sticky top navigation pins on scroll?',
      name: 'Dean S.',
      time: '10d',
    },
    href: '/design/react/how-to-not-sleep~987-654-321',
    viewed: false,
  },
];

export default function CommunityNamePage() {
  return (
    <RightSidebarLayout>
      <RightSidebarLayout.Sidebar>
        <div className="rounded bg-white border border-gray-300 mb-3 mt-3">
          <CommunityCard community={community} />
        </div>
        <ChannelsCard />
      </RightSidebarLayout.Sidebar>
      <RightSidebarLayout.Body>
        {threads.map(item => (
          <ThreadItem {...item} key={item.data.title}></ThreadItem>
        ))}
      </RightSidebarLayout.Body>
    </RightSidebarLayout>
  );
}
