import React from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Avatar from 'components/Avatar/Avatar';
import IconPhoto from 'components/icons/IconPhoto';

export interface CoverAndAvatarUploaderProps {
  coverName: string;
  avatarName: string;
  avatarSquared?: boolean;
}

const Container = styled.div`
  ${tw`relative`}
  margin-bottom:20px;
`;

const AvatarWrapper = styled.div<{ squared: boolean }>`
  ${tw`absolute rounded-lg bg-gray-800 cursor-pointer overflow-hidden`}
  border-radius: ${props => (props.squared ? 8 : 99999)}px;
  bottom: -24px;
  left: 16px;
  width: 48px;
  height: 48px;
  z-index: 4;
  border: 2px solid white;
`;

const AvatarFallback = styled.div<{ shown: boolean; squared: boolean }>`
  ${tw`text-white flex items-center justify-center absolute inset-0 bg-gray-800`}
  border-radius: ${props => (props.squared ? 8 : 99999)}px;
  transition: all 0.3s ease;
  width: 48px;
  height: 48px;
  margin-top: -2px;
  margin-left: -2px;
  opacity: ${props => (props.shown ? 1 : 0)};
  &:hover {
    opacity: 1 !important;
  }
`;

const CoverContainer = styled.div`
  ${tw`bg-cover bg-norepeat bg-center relative overflow-hidden cursor-pointer bg-gray-800 rounded-lg`}
  height: 114px;
  max-width: 342px;
  width: 100%;
`;

const Overlay = styled.div<{ shown: boolean }>`
  ${tw`absolute flex items-center justify-center inset-0 bg-gray-800 rounded-lg`}
  opacity: ${props => (props.shown ? 1 : 0)};
  transition: all 0.3s ease;
  &:hover {
    opacity: 1 !important;
  }
`;

const CoverAndAvatarUploader = ({
  avatarName,
  coverName,
  avatarSquared = false,
}: CoverAndAvatarUploaderProps) => {
  const [coverField, , coverHelpers] = useField(coverName);
  const [avatarField, , avararHelpers] = useField(avatarName);

  const setCoverPhoto = () => {
    const url = window.prompt('Enter image url for cover photo');
    coverHelpers.setValue(url);
  };

  const setAvatarPhoto = () => {
    const url = window.prompt('Enter image url for avatar photo');
    avararHelpers.setValue(url);
  };

  return (
    <Container>
      <CoverContainer
        onClick={setCoverPhoto}
        style={{ backgroundImage: `url(${coverField.value})` }}
      >
        <Overlay shown={coverField.value === ''}>
          <span className="px-3 py-2 font-semibold rounded-full border border-white text-white">
            Add cover photo
          </span>
        </Overlay>
      </CoverContainer>
      <AvatarWrapper onClick={setAvatarPhoto} squared={avatarSquared}>
        {avatarField.value && (
          <Avatar
            squared={avatarSquared}
            url={avatarField.value}
            size={44}
          ></Avatar>
        )}
        <AvatarFallback
          squared={avatarSquared}
          shown={avatarField.value === ''}
        >
          <IconPhoto></IconPhoto>
        </AvatarFallback>
      </AvatarWrapper>
    </Container>
  );
};

export default CoverAndAvatarUploader;
