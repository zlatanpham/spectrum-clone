import React from 'react';
import { ActionsContainer } from './styles';
import Link from 'next/link';

export interface UserActionsProps {
  user: any;
}

const currentUser = {
  id: '123',
};

const UserActions: React.FC<UserActionsProps> = ({ user }) => {
  const { id, username } = user;
  const handleMessage = () => alert('handleMessage');
  const handleReport = () => alert('handleReport');

  const isPrimaryUser = currentUser && currentUser.id === id;
  const isNotPrimaryUser = currentUser && currentUser.id !== id;

  return (
    <ActionsContainer>
      {isPrimaryUser && (
        <Link href={`/users/${username}/settings`}>
          <button className="border border-gray-300 px-4 py-2 bg-white rounded-full flex">
            Settings
          </button>
        </Link>
      )}

      {isNotPrimaryUser && (
        <>
          <button onClick={handleMessage}>Message</button>
          <button onClick={handleReport}>Report</button>
        </>
      )}
    </ActionsContainer>
  );
};

export default UserActions;
