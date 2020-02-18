import React from 'react';
import { ActionsContainer } from './styles';
import Link from 'next/link';
import OutlineButton from 'components/Button/OutlineButton';

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
          <OutlineButton>Settings</OutlineButton>
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
