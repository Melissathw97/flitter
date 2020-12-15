import React from 'react';
import styleClasses from '../../styles/navigation.module.scss';
import HomeIcon from '../icons/home';
import SearchIcon from '../icons/search';
import NotificationIcon from '../icons/notification';
import MessageIcon from '../icons/message';
import BookmarkIcon from '../icons/bookmark';
import ListIcon from '../icons/list';
import ProfileIcon from '../icons/profile';
import MoreIcon from '../icons/more';

const Sidebar = () => {

  const icons = [
    {
      id: "home",
      icon:
        <HomeIcon
          className={styleClasses.icon}
        />
    },
    {
      id: "search",
      icon:
        <SearchIcon
          className={styleClasses.icon}
        />
    },
    {
      id: "notification",
      icon:
        <NotificationIcon
          className={styleClasses.icon}
        />
    },
    {
      id: "message",
      icon:
        <MessageIcon
          className={styleClasses.icon}
        />
    },
    {
      id: "bookmark",
      icon:
        <BookmarkIcon
          className={styleClasses.icon}
        />,
    },
    {
      id: "list",
      icon:
        <ListIcon
          className={styleClasses.icon}
        />,
    },
    {
      id: "profile",
      icon:
        <ProfileIcon
          className={styleClasses.icon}
        />
    },
    {
      id: "more",
      icon:
        <MoreIcon
          className={styleClasses.icon}
        />
    }
  ];

  return (
    <nav className={styleClasses.sidebar}>
      {
        icons.map(({ id, icon }) => (
          <div
            key={id}
            className={styleClasses.iconWrapper}
          >
            {icon}
          </div>
        ))
      }
    </nav>
  )
};

export default Sidebar;