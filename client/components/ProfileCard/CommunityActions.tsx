import React, { useState } from 'react';
import { ActionsContainer } from './styles';

export interface CommunityActionsProps {
  community: any;
}

const CommunityActions: React.FC<CommunityActionsProps> = ({ community }) => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const handleLeaveCommunity = () => alert('leave community');

  const { isMember, isOwner, isModerator } = community.communityPermissions;
  const isTeamMember = isOwner || isModerator;

  if (isMember) {
    return (
      <ActionsContainer>
        {isTeamMember && <button>Settings</button>}

        {!isOwner && (
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleLeaveCommunity}
          >
            {isHover ? 'Leave community' : 'Member'}
          </button>
        )}
      </ActionsContainer>
    );
  }

  return (
    <ActionsContainer>
      <button>Join community</button>
    </ActionsContainer>
  );
};

export default CommunityActions;
