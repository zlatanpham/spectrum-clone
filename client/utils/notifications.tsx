import React from 'react';
import { toast } from 'react-toastify';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const MessageContainer = styled.div`
  ${tw`px-3 py-2 rounded text-sm`};
  width: 160px;
`;

const SuccessContainer = styled(MessageContainer)`
  ${tw`bg-green-500 text-white`}
`;

const ErrorContainer = styled(MessageContainer)`
  ${tw`bg-red-500 text-white`}
`;

export const showSuccessNotification = (message: string) => {
  toast(<SuccessContainer>{message}</SuccessContainer>);
};

export const showErrorNotification = (message: string) => {
  toast(<ErrorContainer>{message}</ErrorContainer>);
};
