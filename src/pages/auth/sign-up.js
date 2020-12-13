import React, { useState } from 'react';
import styleClasses from '../../styles/auth.module.scss';
import { useAuth } from '../../utils/Firebase/auth';
import AuthForm from '../../components/forms/authForm';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';

const SignUp = () => {

  const { userSignUp } = useAuth();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = ({ email, password }) => {
    setIsSubmitting(true);
    userSignUp(email, password)
      .then(() => {
        setIsSubmitting(false);
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
          Sign up to Flitter
        </h2>
        <AuthForm
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
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