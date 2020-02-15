import React from 'react';
import ThreadItem from 'components/ThreadItem';
import { useRouter } from 'next/router';

const threads = [
  {
    data: {
      avatar:
        'https://spectrum.imgix.net/users/5fd9b9be-e3b0-40cd-92f9-fa08d4261264/db11a0af-5850-4458-a9e9-2da88a209358-ryYruko.jpg?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=3b0ec27af423eb69060cd0f26ed97bd4',
      channelName: 'General',
      channelSlug: 'react',
      comments: 7,
      likes: 12,
      desc: `Just an idea I've had kicking around for a while - a lot of people want to use named breakpoints when working with media queries, but CSS doesn't allow you to set and use custom properties and use them like @media (var(--my-breakpoint)) {} because CSS custom properties could be…`,
      title: 'Named Media Query Breakpoints in Plain CSS',
      name: 'Tommy hodgins',
      time: '182d',
      slug: 'react',
      id: '1234',
    },
    href: '/design/react/how-to-not-sleep~987-654-321',
    viewed: true,
  },
  {
    data: {
      avatar:
        'https://spectrum-proxy.imgix.net/https%3A%2F%2Favatars0.githubusercontent.com%2Fu%2F4677417%3Fv%3D4?w=256&h=256&dpr=2&auto=compress&expires=1577664000000&ixlib=js-1.4.1&s=c631e9ed0a0dc84210c47d2da73b1fd0',
      channelName: 'General',
      channelSlug: 'general',
      comments: 2,
      likes: 5,
      desc: `I apologize if this is not the place to post this. I searched, couldn't locate a vibrant css community outside this one here.
      Anyone know of a tutorial/excercise/examples of something that mimics this:
      https://us.puma.com/en/us/home?locale=en_US …`,
      title:
        'Notification bar at top, but sticky top navigation pins on scroll?',
      name: 'Dean S.',
      time: '10d',
      slug: 'react',
      id: '1234',
    },
    href: '/design/react/how-to-not-sleep~987-654-321',
    viewed: false,
  },
];

export default function PostList() {
  const { query } = useRouter();
  const { communityname } = query;
  return (
    <div>
      {threads.map(item => (
        <ThreadItem
          {...item}
          href={`/${communityname}/${item.data.channelSlug}/${item.data.slug}~${item.data.id}`}
          key={item.data.title}
        ></ThreadItem>
      ))}
    </div>
  );
}
