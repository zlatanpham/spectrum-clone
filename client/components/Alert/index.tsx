import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`rounded border px-3 py-2 text-sm`}
`;

const ErrorAlert = styled(Container)`
  ${tw`border-red bg-pink-100 text-red-500`}
`;

const WarningAlert = styled(Container)`
  ${tw`border-yellow-400 bg-yellow-200 text-brown-100`}
`;

const SuccessAlert = styled(Container)`
  ${tw`border-green bg-green-100 text-green-500`}
`;

const InfoAlert = styled(Container)`
  ${tw`border-blue bg-blue-200 text-blue-dark`}
`;

export type AlertType = 'error' | 'warning' | 'info' | 'success';

export interface AlertProps {
  type: AlertType;
  className?: string;
  style?: Object;
}

const components: { [k in AlertType]: React.ElementType } = {
  error: ErrorAlert,
  success: SuccessAlert,
  warning: WarningAlert,
  info: InfoAlert,
};

const Alert: React.FC<AlertProps> = props => {
  const { type = 'warning', className = '', children, ...rest } = props;
  const RenderAlert = components[type];
  return (
    <RenderAlert className={className} {...rest}>
      {children}
    </RenderAlert>
  );
};

export default Alert;
