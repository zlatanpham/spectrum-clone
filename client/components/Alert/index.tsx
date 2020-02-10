import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Container = styled.div`
  ${tw`p-4 rounded-sm border`}
`;

const ErrorAlert = styled(Container)`
  ${tw`border-red-200 bg-pink-200`}
`;

const WarningAlert = styled(Container)`
  ${tw`border-yellow-300 bg-yellow-200`}
`;

const SuccessAlert = styled(Container)`
  ${tw`border-green-500 bg-green-200`}
`;

const InfoAlert = styled(Container)`
  ${tw`border-blue-700 bg-blue-300`}
`;

export type AlertType = 'error' | 'warning' | 'info' | 'success';

export interface AlertProps {
  type: AlertType;
  children: React.ReactElement;
  className?: string;
}

const components: { [k in AlertType]: React.ElementType } = {
  error: ErrorAlert,
  success: SuccessAlert,
  warning: WarningAlert,
  info: InfoAlert,
};

const Alert = ({ children, className = '', ...props }: AlertProps) => {
  const { type } = props;
  const RenderAlert = components[type];
  return (
    <div className={className}>
      <RenderAlert>{children}</RenderAlert>
    </div>
  );
};

export default Alert;
