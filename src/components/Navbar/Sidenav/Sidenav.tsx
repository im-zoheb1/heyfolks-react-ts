import {
  Sidenav,
  SidenavInner,
  SidenavUserInfo,
  SidenavUserImgHolder,
  SidenavUserImg,
  SidenavFullname,
  SidenavUsername,
  SidenavLinks,
  SidenavLink,
  SidenavLinkIconHolder,
  SidenavLinkIcon,
  SidenavLinkText,
} from './Sidenav.element';

import React from 'react';

interface User {
  img: string;
  fullname: string;
  username: string;
}

interface SidenavLinkItem {
  icon: string;
  iconSolid: string;
  text: string;
  href: string;
}

interface SidenavProps {
  sidenavLinks: Array<SidenavLinkItem>;
  user: User;
}

const TheSidenav: React.FC<SidenavProps> = ({ user, sidenavLinks }) => {
  const linkItems: Array<JSX.Element> = sidenavLinks.map((link, index) => {
    return (
      <SidenavLink to={link.href} key={index} activeClassName="active">
        <SidenavLinkIconHolder>
          {window.location.pathname === link.href ? (
            <SidenavLinkIcon className={link.iconSolid}></SidenavLinkIcon>
          ) : (
            <SidenavLinkIcon className={link.icon}></SidenavLinkIcon>
          )}
        </SidenavLinkIconHolder>
        <SidenavLinkText>{link.text}</SidenavLinkText>
      </SidenavLink>
    );
  });

  return (
    <Sidenav>
      <SidenavInner>
        <SidenavUserInfo>
          <SidenavUserImgHolder>
            <SidenavUserImg src={user.img} alt={user.username}></SidenavUserImg>
          </SidenavUserImgHolder>
          <SidenavFullname>{user.fullname}</SidenavFullname>
          <SidenavUsername>@{user.username}</SidenavUsername>
        </SidenavUserInfo>
        <SidenavLinks>{linkItems}</SidenavLinks>
      </SidenavInner>
    </Sidenav>
  );
};

export default TheSidenav;
