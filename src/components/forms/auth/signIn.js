import React from 'react';
import styleClasses from '../../../styles/auth.module.scss';
import { inputs, initialValues, validationSchema } from '../../../constants/auth/signIn';
import { Formik, Form } from 'formik';
import FormInputs from '../inputs';
import { MainButton } from '../../buttons';

const SignInForm = ({ handleSubmit, isSubmitting }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur }) => (
        <Form className={styleClasses.form}>
          {
            inputs.map(({ name, label, inputType }) => (
              <FormInputs
                key={name}
                name={name}
                label={label}
                inputType={inputType}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            ))
          }
          <MainButton
            type="submit"
            title="Submit"
            disabled={isSubmitting}
          />
        </Form>
      )}
    </Formik>
  )
};

export default SignInForm;