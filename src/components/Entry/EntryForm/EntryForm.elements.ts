import styled from 'styled-components/macro';

export const EntryForm = styled.div`
  flex: 5;
  padding: 6rem 10rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0;
  }
`;
