import * as Styled from './Sidenav.element';

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
      <Styled.SidenavLink to={link.href} key={index} activeClassName="active">
        <Styled.SidenavLinkIconHolder>
          {window.location.pathname === link.href ? (
            <Styled.SidenavLinkIcon className={link.iconSolid}></Styled.SidenavLinkIcon>
          ) : (
            <Styled.SidenavLinkIcon className={link.icon}></Styled.SidenavLinkIcon>
          )}
        </Styled.SidenavLinkIconHolder>
        <Styled.SidenavLinkText>{link.text}</Styled.SidenavLinkText>
      </Styled.SidenavLink>
    );
  });

  return (
    <Styled.Sidenav>
      <Styled.SidenavInner>
        <Styled.SidenavUserInfo>
          <Styled.SidenavUserImgHolder>
            <Styled.SidenavUserImg src={user.img} alt={user.username}></Styled.SidenavUserImg>
          </Styled.SidenavUserImgHolder>
          <Styled.SidenavFullname>{user.fullname}</Styled.SidenavFullname>
          <Styled.SidenavUsername>@{user.username}</Styled.SidenavUsername>
        </Styled.SidenavUserInfo>
        <Styled.SidenavLinks>{linkItems}</Styled.SidenavLinks>
      </Styled.SidenavInner>
    </Styled.Sidenav>
  );
};

export default TheSidenav;
