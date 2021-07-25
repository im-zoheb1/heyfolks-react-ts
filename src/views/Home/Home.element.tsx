import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  margin: ${(props) => props.theme.margin.gutter};
  flex: 1;
  overflow-y: scroll;
  padding: 2px;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
