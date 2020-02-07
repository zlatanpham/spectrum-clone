import React from 'react';
import { toast } from 'react-toastify';
import tw from 'tailwind.macro';
import styled from 'styled-components';

const Container = styled.div`
  ${tw`px-3 py-2 rounded text-sm text-white`};
  width: 160px;
`;

export const showSuccessNotification = (message: string) => {
  toast(<Container className="bg-green">{message}</Container>);
};

export const showErrorNotification = (message: string) => {
  toast(<Container className="bg-red-100">{message}</Container>);
};
