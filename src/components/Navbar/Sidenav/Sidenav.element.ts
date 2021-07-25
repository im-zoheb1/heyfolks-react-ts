import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Sidenav = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgColor};
  min-width: 29.5rem;
  box-shadow: ${(props) => props.theme.boxShadow.default};
`;
export const SidenavInner = styled.div`
  padding: 3rem 4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidenavUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SidenavUserImgHolder = styled.div`
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
`;
export const SidenavUserImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const SidenavFullname = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  margin-top: 0.6rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;
export const SidenavUsername = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 600;
  color: ${(props) => props.theme.colors.muted};
`;
export const SidenavLinks = styled.div`
  margin-top: 5rem;
  flex: 1;
  overflow-y: scroll;
  scrollbar-width: 0;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
export const SidenavLinkIconHolder = styled.div``;
export const SidenavLinkIcon = styled.i`
  color: ${(props) => props.theme.colors.dark};
  font-size: 2.6rem !important;
`;
export const SidenavLinkText = styled.div`
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: 600;
  margin-left: 2.5rem;
  margin-top: -5px;
  letter-spacing: 0.5px;
`;

export const SidenavLink = styled(NavLink)`
  &.active ${SidenavLinkText} {
    color: ${(props) => props.theme.colors.primary};
  }
  &.active ${SidenavLinkIcon} {
    color: ${(props) => props.theme.colors.primary};
  }
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.dark};
`;
