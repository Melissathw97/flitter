import React from 'react';
import styleClasses from '../../styles/auth.module.scss';
import SignUpForm from '../../components/forms/auth/signUp';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const SignUp = () => {
  return (
    <div className={styleClasses.page}>
      <div className={styleClasses.formWrapper}>
        <img
          src="assets/images/flitter-logo.png"
          alt="Flitter logo"
          className={styleClasses.logo}
        />
        <h2 className={styleClasses.title}>
          Create a Flitter Account
        </h2>
        <SignUpForm />
        <Link
          to={routes.SIGN_IN}
          className={styleClasses.link}
        >
          Already a user? Sign in!
        </Link>
      </div>
    </div>
  );
};

export default SignUp;