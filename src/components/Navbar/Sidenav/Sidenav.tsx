import { NavLink } from 'react-router-dom';

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

const TheSidenav = () => {
  return (
    <Sidenav>
      <SidenavInner>
        <SidenavUserInfo>
          <SidenavUserImgHolder>
            <SidenavUserImg></SidenavUserImg>
          </SidenavUserImgHolder>
          <SidenavFullname></SidenavFullname>
          <SidenavUsername></SidenavUsername>
        </SidenavUserInfo>
        <SidenavLinks>
          <SidenavLink>
            <SidenavLinkIconHolder>
              <SidenavLinkIcon></SidenavLinkIcon>
            </SidenavLinkIconHolder>
            <SidenavLinkText></SidenavLinkText>
          </SidenavLink>
        </SidenavLinks>
      </SidenavInner>
    </Sidenav>
  );
};

export default TheSidenav;
