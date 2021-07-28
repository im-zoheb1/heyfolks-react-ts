import styled from 'styled-components/macro';

// POST HEADER
export const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const PostHeaderImgHolder = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 1.5rem;
`;
export const PostHeaderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PostUsername = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: 600;
  color: ${(props) => props.theme.colors.dark};
`;
export const PostAddress = styled.div`
  font-size: ${(props) => props.theme.fontSize.xs};
  color: ${(props) => props.theme.colors.muted};
  font-weight: 400;
`;

// POST BODY
export const PostBody = styled.div``;
export const PostBodyText = styled.div`
  font-size: ${(props) => props.theme.fontSize.sm};
  color: ${(props) => props.theme.colors.dark};
  padding-bottom: 1rem;
  padding-top: 1.5rem;
`;

// POST ACTIONS
export const PostActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
`;
export const PostAction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
export const PostActionIcon = styled.i`
  margin-right: 0.5rem;
  font-size: 2.4rem;
  color: ${(props) => props.theme.colors.dark};
  cursor: pointer;
`;
export const PostActionText = styled.div`
  color: ${(props) => props.theme.colors.lightDark};
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.xs};
`;

// POST COMMENTS

export const PostCommentInput = styled.div`
  padding-top: 1.2rem;
`;
export const PostComments = styled.div`
  padding-top: 2.3rem;
`;
export const PostComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;
export const PostCommentImgHolder = styled.div`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  overflow: hidden;
`;
export const PostCommentImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const PostCommentText = styled.div`
  flex: 1;
  font-size: ${(props) => props.theme.fontSize.xs};
  margin-left: 1.5rem;
  background-color: ${(props) => props.theme.colors.comment};
  color: ${(props) => props.theme.colors.dark};
  padding: 1rem 1.5rem;
  border: 1px solid rgba(71, 32, 32, 0.08);
  border-radius: 7px;
`;
export const PostMoreButton = styled.button`
  color: ${(props) => props.theme.colors.blue};
  background: none;
  outline: none;
  padding: none;
  border: none;
  font-size: ${(props) => props.theme.fontSize.sm};
  text-transform: capitalize;
  margin-top: 2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
