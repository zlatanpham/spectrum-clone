import tw from 'tailwind.macro';
import styled from 'styled-components';

const SingleColumnLayout = styled.div`
  ${tw`bg-white border-solid border-t-0 border-b-0 border-r border-l border-gray-300 min-h-screen`};
  width: 96%;
  max-width: 944px;
`;

export default SingleColumnLayout;
