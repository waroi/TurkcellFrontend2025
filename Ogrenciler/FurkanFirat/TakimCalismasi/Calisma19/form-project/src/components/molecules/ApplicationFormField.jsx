import React from 'react';
import { FormInput } from '../atoms/FormInput';
import FormSelect from '../atoms/FormSelect';
import FormTextArea from '../atoms/FormTextArea';

const ApplicationFormField = ({
  field,
  touched,
  errors,
  handleChange,
  handleBlur,
  values,
}) => {
  return (
    <div className={`col-md-${field.column}`} key={field.id}>
      {['text', 'email', 'phone'].includes(field.type) && (
        <FormInput
          className={`form-control ${
            touched[field.name] &&
            (errors[field.name] ? 'is-invalid' : 'is-valid')
          }`}
          type={field.type}
          id={field.id}
          name={field.name}
          placeholder={field.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[field.name]}
          error={touched[field.name] && errors[field.name]}
        />
      )}

      {field.type === 'select' && (
        <FormSelect
          className={`form-control ${
            touched[field.name] &&
            (errors[field.name] ? 'is-invalid' : 'is-valid')
          }`}
          options={field.options}
          id={field.id}
          name={field.name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[field.name]}
          error={touched[field.name] && errors[field.name]}
        />
      )}

      {field.type === 'textarea' && (
        <FormTextArea
          id={field.id}
          name={field.name}
          rows={field.rows}
          cols={field.cols}
          placeholder={field.placeholder}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[field.name]}
          error={touched[field.name] && errors[field.name]}
        />
      )}
    </div>
  );
};

export default ApplicationFormField;
