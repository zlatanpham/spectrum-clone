import React from 'react';
import UserCard from 'components/UserCard';
import Link from 'next/link';
import OutlineButton from 'components/Button/OutlineButton';

export default function PostHeader() {
  return (
    <div className="px-4 py-3 border-b border-gray-200 relative flex justify-between bg-white hover:bg-gray-100 items-center">
      <Link href="/users/hanland">
        <a className="absolute inset-0"></a>
      </Link>
      <UserCard
        name="Joe Hanland"
        slug="hanland"
        avatar="https://spectrum.imgix.net/users/f8ea7c96-65dc-4120-a61b-c2cb9026b0a7/hk1jntFkp-UNADJUSTEDNONRAW_thumb_1ceb.jpg?w=256&h=256&dpr=2&auto=compress&expires=1581465600000&ixlib=js-1.4.1&s=ea97644249561291063f54b4ccef94c2"
      ></UserCard>
      <OutlineButton size="small">Message</OutlineButton>
    </div>
  );
}
