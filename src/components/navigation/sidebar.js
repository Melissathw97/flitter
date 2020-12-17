import React from 'react';
import styleClasses from '../../styles/navigation.module.scss';
import { icons } from '../../constants/navIcons';
import { Link } from 'react-router-dom';

const Sidebar = ({ profileData }) => {
  return (
    <nav className={styleClasses.sidebar}>
      {
        icons.map(({ id, path, icon }) => (
          <Link
            key={id}
            to={path}
            className={styleClasses.iconWrapper}
          >
            {icon}
          </Link>
        ))
      }
    </nav>
  )
};

export default Sidebar;