import tw from 'tailwind.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`flex flex-col w-full relative bg-white border rounded-sm`};
`;

export const CoverPhoto = styled.div<{ src: string }>`
  ${tw`relative w-full h-full bg-secondary overflow-hidden bg-cover bg-center rounded-t`}
  min-height: 133px;
  max-height: 133px;
  background-image: url(${props => props.src});
`;

export const AvatarContainer = styled.div`
  ${tw`relative bg-white border-4 border-solid border-white`}
  top: -36px;
  width: 68px;
  height: 68px;
  margin-left: 12px;
  border-radius: 10px;
  margin-bottom: -44px;
`;

export const RoundAvatarContainer = styled(AvatarContainer)`
  border-radius: 34px;
  margin-bottom: -48px;
`;

export const MetaContainer = styled.div`
  ${tw`flex flex-col px-4 mt-4`}
`;

export const Name = styled.h1`
  ${tw`text-2xl font-extrabold text-secondary break-words leading-tight`}
`;

export const Username = styled.div`
  ${tw`text-lg font-medium text-gray mb-1 break-words`}
  margin-top: 2px;
`;

export const Description = styled.p`
  ${tw`my-2 text-base font-normal leading-normal text-gray-700 break-words`}

  a {
    ${tw`text-secondary font-medium hover:underline`}
  }
`;

export const MetaRow = styled.div`
  ${tw`flex text-base font-normal text-gray-700 items-center mt-2 break-words`}

  a {
    ${tw`flex items-center hover:text-secondary`}
  }

  .icon {
    margin-right: 8px;
  }
`;

export const OnlineDot = styled.div`
  ${tw`h-2 w-2 rounded bg-green mr-4`}
  margin-left: 6px
`;

export const ActionsContainer = styled.div`
  ${tw`flex pt-4 pb-5 px-4 mt-2`}

  button {
    flex: 1;
  }
`;
