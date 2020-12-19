import React from 'react';
import { ErrorMessage } from 'formik';

const FormInputs = ({ name, label, value, inputType, handleChange, handleBlur }) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={inputType}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <ErrorMessage
        name={name}
        render={msg =>
          <div className="errorMessage">
            {msg}
          </div>
        }
      />
    </>
  )
};

export default FormInputs;