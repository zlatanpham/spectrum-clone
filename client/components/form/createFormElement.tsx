import React from 'react';
import { useField, FieldHookConfig } from 'formik';

export type FormElement<T> = {
  label?: string;
} & FieldHookConfig<any> &
  T;

function createFormElement<T>(Component: React.FC<any>) {
  const FormElement = ({ label, ...props }: FormElement<T>) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label>
          {label && (
            <div className="text-sm font-medium leading-relaxed">{label}</div>
          )}
          <Component {...field} {...props} />
          {meta.touched && meta.error ? (
            <p className="mt-2 mb-4 text-red-200 text-sm font-medium">
              {meta.error}
            </p>
          ) : null}
        </label>
      </>
    );
  };

  return FormElement;
}

export default createFormElement;
