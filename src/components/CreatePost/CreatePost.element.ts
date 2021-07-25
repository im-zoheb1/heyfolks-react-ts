import styled from 'styled-components/macro';

export const CreatePost = styled.div`
  overflow: visible;
  height: auto;
`;

export const CreatePostMessage = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  letter-spacing: 0.5px;
  font-family: inherit;
  font-size: ${(props) => props.theme.fontSize.sm};
  &::placeholder {
    font-weight: 700;
  }
`;

export const CreatePostFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;
