import React, { useState } from 'react';
import { ActionsContainer } from './styles';
import OutlineButton from 'components/Button/OutlineButton';
import PrimaryButton from 'components/Button/PrimaryButton';

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
        {isTeamMember && <OutlineButton>Settings</OutlineButton>}

        {!isOwner && (
          <OutlineButton
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleLeaveCommunity}
          >
            {isHover ? 'Leave community' : 'Member'}
          </OutlineButton>
        )}
      </ActionsContainer>
    );
  }

  return (
    <ActionsContainer>
      <PrimaryButton>Join community</PrimaryButton>
    </ActionsContainer>
  );
};

export default CommunityActions;
