import * as Styled from './Post.element';

const PostHeader = () => {
  return (
    <Styled.PostHeader>
      <Styled.PostHeaderImgHolder>
        <Styled.PostHeaderImg></Styled.PostHeaderImg>
      </Styled.PostHeaderImgHolder>
      <div>
        <Styled.PostUsername></Styled.PostUsername>
        <Styled.PostAddress></Styled.PostAddress>
      </div>
    </Styled.PostHeader>
  );
};

export default PostHeader;
