import React from 'react';
import * as Styled from './Post.element';

interface PostHeaderProps {
  userInfo: {
    name: string;
    address: string;
    image: string;
  };
}

const PostHeader: React.FC<PostHeaderProps> = ({ userInfo }) => {
  return (
    <Styled.PostHeader>
      <Styled.PostHeaderImgHolder>
        <Styled.PostHeaderImg src={userInfo.image}></Styled.PostHeaderImg>
      </Styled.PostHeaderImgHolder>
      <div>
        <Styled.PostUsername>{userInfo.name}</Styled.PostUsername>
        <Styled.PostAddress>{userInfo.address}</Styled.PostAddress>
      </div>
    </Styled.PostHeader>
  );
};

export default PostHeader;
