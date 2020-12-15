import React from 'react';
import styleClasses from '../../styles/navigation.module.scss';
import HomeIcon from '../icons/home';
import SearchIcon from '../icons/search';

const Sidebar = () => {
  return (
    <nav className={styleClasses.sidebar}>
      <HomeIcon
        className={styleClasses.icon}
      />
      <SearchIcon
        className={styleClasses.icon}
      />
    </nav>
  )
};

export default Sidebar;