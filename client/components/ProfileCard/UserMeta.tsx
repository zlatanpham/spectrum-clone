import React from 'react';
import {
  MetaContainer,
  Name,
  Description,
  MetaRow,
  OnlineDot,
  Username,
} from './styles';
import IconLink from 'components/icons/IconLink';
import IconGithub from 'components/icons/IconGithub';

export interface UserMetaProps {
  user: any;
}

const UserMeta: React.FC<UserMetaProps> = ({ user }) => {
  const { name, username, website, github, isOnline, description } = user;
  return (
    <MetaContainer>
      <Name>{name}</Name>

      {username && <Username>@{username}</Username>}

      {description && <Description>{description}</Description>}

      {website && (
        <MetaRow>
          <a target="_blank" rel="noopener noreferrer" href={website}>
            <IconLink className="mr-2" size={20} />
            {website}
          </a>
        </MetaRow>
      )}

      {github && (
        <MetaRow>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${github.username}`}
          >
            <IconGithub className="mr-2" size={20} /> @{github.username}
          </a>
        </MetaRow>
      )}

      {isOnline && (
        <MetaRow>
          <OnlineDot /> Online now
        </MetaRow>
      )}
    </MetaContainer>
  );
};

export default UserMeta;
