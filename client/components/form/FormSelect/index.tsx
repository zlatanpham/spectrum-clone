import React from 'react';
import Select, { SelectProps } from '../../Select';
import { useField, FieldHookConfig } from 'formik';

export type FormSelectProps = FieldHookConfig<any> & SelectProps;

const FormSelect = (props: FormSelectProps) => {
  const [field, , helpers] = useField(props.name);
  return (
    <Select {...field} {...props} onChange={value => helpers.setValue(value)} />
  );
};

export default FormSelect;
