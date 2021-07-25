import styled from 'styled-components/macro';

// background image
import entryHelperBg from 'assets/images/entryHelperBg.png';

export const EntryHelper = styled.div`
  background: ${(props) => props.theme.gradient.linearTransparent}, url(${entryHelperBg});
  background-size: cover;
  background-position: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  // width
  flex: 4;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const EntryHelperText = styled.div`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSize.lg};
  margin-top: 1rem;
`;

export const EntryHelperButton = styled.div`
  margin-top: 5rem;
`;
