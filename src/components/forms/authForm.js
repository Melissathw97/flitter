import React from 'react';
import styleClasses from '../../styles/auth.module.scss';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MainButton } from '../buttons';

const AuthForm = ({ handleSubmit, isSubmitting }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={
        Yup.object().shape({
          email: Yup.string()
            .required("Please enter your e-mail")
            .email("Invalid e-mail address"),
          password: Yup.string()
            .required("Please enter your password")
        })
      }
      onSubmit={handleSubmit}
    >
      {({ handleChange, handleBlur }) => (
        <Form className={styleClasses.form}>
          <label htmlFor="email">
            E-mail
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="email"
            render={msg => <div className="errorMessage">{msg}</div>}
          />
          <label htmlFor="email">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            name="password"
            render={msg => <div className="errorMessage">{msg}</div>}
          />
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

export default AuthForm;
