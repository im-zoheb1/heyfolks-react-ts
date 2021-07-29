import React from 'react';
import * as Styled from './Post.element';
import FormInput from 'components/UI/Form/FormInput';

interface commentProps {
  comment: {
    commentImage: string;
    commentText: string;
  }
}

const PostComments: React.FC<commentProps> = ({ comment }) => {

  return (
    <>
      <Styled.PostCommentInput>
        <FormInput size="md" type="text" placeholder="Write a comment"></FormInput>
      </Styled.PostCommentInput>
      <Styled.PostComments>
        <Styled.PostComment>
          <Styled.PostCommentImgHolder>
            <Styled.PostCommentImg src={comment.commentImage}></Styled.PostCommentImg>
          </Styled.PostCommentImgHolder>
          <Styled.PostCommentText>{comment.commentText}</Styled.PostCommentText>
        </Styled.PostComment>
      </Styled.PostComments>
      <Styled.PostMoreButton>more</Styled.PostMoreButton>
    </>
  );
};

export default PostComments;
