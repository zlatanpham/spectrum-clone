import React from 'react';
import Avatar from 'components/Avatar/Avatar';
import Link from 'next/link';

interface UserCardProps {
  name: string;
  slug: string;
  href?: string;
  avatar?: string;
}

const UserCard = ({ href = '', avatar, name, slug }: UserCardProps) => {
  const render = (
    <>
      <Avatar url={avatar} size={40} />
      <div className="ml-3 leading-tight">
        <div className="text-15 text-secondary whitespace-no-wrap font-semibold">
          {name}
        </div>
        <span className="text-15 whitespace-no-wrap inline-block text-gray-500">
          @{slug}
        </span>
      </div>
    </>
  );
  if (href) {
    return (
      <Link href={href}>
        <a className="inline-flex items-center cursor-pointer">{render}</a>
      </Link>
    );
  }
  return <div className="flex items-center">{render}</div>;
};

export default UserCard;
