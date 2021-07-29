import React from 'react';
import * as Styled from './Post.element';

interface BodyProps {
  text: string;
}

const PostBody: React.FC<BodyProps> = ({ text }) => {
  return (
    <div>
      <Styled.PostBodyText>{text}</Styled.PostBodyText>
    </div>
  );
};

export default PostBody;
