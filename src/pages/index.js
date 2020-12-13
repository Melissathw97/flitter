import React from 'react';
import styleClasses from '../styles/home.module.scss';
import { MainButton, MainOutlinedButton } from '../components/buttons';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const HomePage = () => {
  return (
    <>
      <nav className={styleClasses.navbar}>
        <div className={styleClasses.logoWrapper}>
          <img
            className={styleClasses.logo}
            src="/assets/images/flitter-logo.png"
            alt="Flitter logo"
          />
          <h3>
            Flitter
          </h3>
        </div>
        <div className={styleClasses.contentWrapper}>
          <Link
            to={routes.SIGN_IN}
            className={styleClasses.login}
          >
            Log In
          </Link>
        </div>
      </nav>
      <section className={styleClasses.section}>
        <div className={styleClasses.wrapper}>
          <h1 className={styleClasses.title}>
            See what’s happening in the world right now
          </h1>
          <h3>
            Join Flitter today.
          </h3>
          <div className={styleClasses.buttonWrapper}>
            <Link to={routes.SIGN_UP}>
              <MainButton
                title="Sign Up"
              />
            </Link>
            <Link to={routes.SIGN_IN}>
              <MainOutlinedButton
                title="Log In"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className={styleClasses.blueSection}>
        <img
          className={styleClasses.logo}
          src="/assets/images/flitter-logo.png"
          alt="Flitter logo"
        />
        <div className={styleClasses.content}>
          <h3>
            Follow your interests.
          </h3>
          <h3>
            Hear what people are talking about.
          </h3>
          <h3>
            Join the conversation.
          </h3>
        </div>
      </section>
      <footer className={styleClasses.footer}>
        © 2020 Flitter Inc.
      </footer>
    </>
  )
};

export default HomePage;