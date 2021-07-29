import React, { useState } from 'react';
import * as Styled from './Post.element';

const PostActions = () => {

  let [isLiked, setIsliked] = useState<boolean>(false);
  let [likeClass, setLikeClass] = useState<string>('bx bx-like')

  const toggleLike = (): void => {
    setIsliked(isLiked = !isLiked)
    setLikeClass(isLiked ? 'bx bxs-like' : 'bx bx-like')
  }

  return (
    <Styled.PostActions>
      <Styled.PostAction>
        <Styled.PostActionIcon className={likeClass} onClick={toggleLike} isLiked={isLiked}></Styled.PostActionIcon>
        <Styled.PostActionText>Like</Styled.PostActionText>
      </Styled.PostAction>
      <Styled.PostAction>
        <Styled.PostActionIcon className="bx bx-comment-minus"></Styled.PostActionIcon>
        <Styled.PostActionText>Comment</Styled.PostActionText>
      </Styled.PostAction>
    </Styled.PostActions>
  );
};

export default PostActions;
