import React, { Fragment } from 'react';
import Link from 'next/link';
import { MetaContainer, Name, Description, MetaRow, OnlineDot } from './styles';
import IconLink from 'components/icons/IconLink';
import IconPerson from 'components/icons/IconPerson';

export interface CommunityMetaProps {
  community: any;
}

const CommunityMeta: React.FC<CommunityMetaProps> = ({ community }) => {
  const { name, slug, description, website, metaData } = community;
  return (
    <MetaContainer>
      <Link href={`/${slug}`} passHref>
        <a>
          <Name>{name}</Name>
        </a>
      </Link>

      {description && <Description>{description}</Description>}

      {website && (
        <MetaRow>
          <a target="_blank" rel="noopener noreferrer" href={website}>
            <IconLink className="mr-2" size={20} />
            {website}
          </a>
        </MetaRow>
      )}

      {metaData && (
        <Fragment>
          <MetaRow>
            <Link href={`/${slug}?tab=members`} passHref>
              <a>
                <IconPerson className="mr-2" size={20} />
                {metaData.members.toLocaleString()} members
              </a>
            </Link>
          </MetaRow>

          <MetaRow>
            <Link href={`/${slug}?tab=members`} passHref>
              <a>
                <OnlineDot />
                {metaData.onlineMembers.toLocaleString()} members online
              </a>
            </Link>
          </MetaRow>
        </Fragment>
      )}
    </MetaContainer>
  );
};

export default CommunityMeta;
