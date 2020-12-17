import React from 'react';
import styleClasses from '../styles/navigation.module.scss';
import HomeIcon from '../components/icons/home';
import SearchIcon from '../components/icons/search';
import NotificationIcon from '../components/icons/notification';
import MessageIcon from '../components/icons/message';
import BookmarkIcon from '../components/icons/bookmark';
import ListIcon from '../components/icons/list';
import ProfileIcon from '../components/icons/profile';
import MoreIcon from '../components/icons/more';

const icons = [
  {
    id: "Home",
    path: "/home",
    icon:
      <HomeIcon
        className={styleClasses.icon}
      />
  },
  {
    id: "Explore",
    path: "/explore",
    icon:
      <SearchIcon
        className={styleClasses.icon}
      />
  },
  {
    id: "Notifications",
    path: "/notifications",
    icon:
      <NotificationIcon
        className={styleClasses.icon}
      />
  },
  {
    id: "Messages",
    path: "/messages",
    icon:
      <MessageIcon
        className={styleClasses.icon}
      />
  },
  {
    id: "Bookmarks",
    path: "/i/bookmarks",
    icon:
      <BookmarkIcon
        className={styleClasses.icon}
      />,
  },
  {
    id: "Lists",
    path: "/lists",
    icon:
      <ListIcon
        className={styleClasses.icon}
      />,
  },
  {
    id: "Profile",
    path: "/username",
    icon:
      <ProfileIcon
        className={styleClasses.icon}
      />
  },
  {
    id: "More",
    path: "#",
    icon:
      <MoreIcon
        className={styleClasses.icon}
      />
  }
];

export {
  icons
};