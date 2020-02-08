import React from 'react';
import Checkbox, { CheckboxProps } from '../../Checkbox';
import { useField, FieldHookConfig } from 'formik';

export type FormCheckboxProps = FieldHookConfig<any> & CheckboxProps;

const FormCheckbox = (props: FormCheckboxProps) => {
  const [field] = useField(props);
  return <Checkbox {...field} {...props} />;
};

export default FormCheckbox;
