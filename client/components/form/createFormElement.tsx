import React from 'react';
import { useField } from 'formik';

export type FormElement = {
  label?: string;
};

export const createFormElement = (
  Component: React.FC<React.HTMLAttributes<HTMLInputElement>>,
) => {
  const FormElement = ({ label, ...props }: FormElement) => {
    // FIXME: should not have the warning
    // @ts-ignore
    const [field, meta] = useField(props);

    return (
      <>
        <label>
          {label && <div>{label}</div>}
          <Component {...field} {...props} />
          {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
          ) : null}
        </label>
      </>
    );
  };

  return FormElement;
};

export default createFormElement;
