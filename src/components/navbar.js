import React from 'react';
import styleClasses from '../styles/home.module.scss';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Navbar = () => {
  return (
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
  )
}

export default Navbar;