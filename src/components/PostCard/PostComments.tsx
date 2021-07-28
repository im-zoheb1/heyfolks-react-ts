import * as Styled from './Post.element';

const PostComments = () => {
  return (
    <>
      <Styled.PostCommentInput></Styled.PostCommentInput>
      <Styled.PostComments>
        <Styled.PostComment>
          <Styled.PostCommentImgHolder>
            <Styled.PostCommentImg></Styled.PostCommentImg>
          </Styled.PostCommentImgHolder>
          <Styled.PostCommentText></Styled.PostCommentText>
        </Styled.PostComment>
      </Styled.PostComments>
      <Styled.PostMoreButton></Styled.PostMoreButton>
    </>
  );
};

export default PostComments;
