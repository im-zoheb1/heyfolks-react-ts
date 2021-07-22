import styled from 'styled-components';

export const TheLogo = styled.div`
  text-transform: uppercase;
  font-size: 4.8rem;
  font-family: ${(props) => props.theme.fonts.logoFont};
  color: ${(props) => props.theme.colors.white};
`;

export const TheLogoAccent = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;
