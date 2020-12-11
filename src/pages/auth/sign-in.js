import React from 'react';
import styleClasses from '../../styles/auth.module.scss';
import { useAuth } from '../../utils/Firebase/auth';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MainButton } from '../../components/buttons';

const SignIn = () => {

  const { userSignIn } = useAuth();

  const handleSubmit = ({ email, password }) => {
    userSignIn(email, password)
      .then(res => {

        console.log(res);
        debugger

        if (res.code === "successfully-signed-in") {
          console.log("Signed in!")
        }

        if (res.code === "auth/user-not-found") {
          console.log("Your e-mail does not match any account in our records. Please sign up as a new user.")
        }

        if (res.code === "auth/wrong-password") {
          console.log("E-mail and password do not match")
        }
      })
  };

  return (
    <div className={styleClasses.page}>
      <div className={styleClasses.formWrapper}>
        <img
          src="assets/images/flitter-logo.png"
          alt="Flitter logo"
          className={styleClasses.logo}
        />
        <h2 className={styleClasses.title}>
          Sign in to Flitter
        </h2>
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
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignIn;