import styled from 'styled-components/macro';

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
`;
export const SearchBarIcon = styled.i`
  font-size: 2.4rem;
  margin-right: 1.5rem;
  color: ${(props) => props.theme.colors.lightDark};
`;
export const SearchBarInput = styled.input`
  flex: 1;
  font-size: ${(props) => props.theme.fontSize.md};
  color: ${(props) => props.theme.colors.lightDark};
  border: none;
  outline: none;
  letter-spacing: 0.5px;
`;
