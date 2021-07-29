import React from 'react';

// SIMPLE CARD COMPONENTS
import Card from 'components/UI/Card';
import CardBody from 'components/UI/Card/CardBody';
import CardFooter from 'components/UI/Card/CardFooter';
// POST CARD COMPONENTS
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostActions from './PostActions';
import PostComments from './PostComments';

interface PostProps {
  post: {
    id: number;
    name: string;
    image: string;
    city: string;
    country: string;
    text: string;
    likes: number;
    comments: number;
    commentImage: string;
    commentText: string;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const headerProps = {
    name: post.name,
    image: post.image,
    address: `${post.city}, ${post.country}`,
  };

  const bodyProps = post.text;

  const commentProps = {
    commentImage: post.commentImage,
    commentText: post.commentText
  }

  return (
    <Card>
      <CardBody>
        <PostHeader userInfo={headerProps}></PostHeader>
        <PostBody text={bodyProps}></PostBody>
      </CardBody>
      <CardFooter>
        <PostActions></PostActions>
        <PostComments comment={commentProps}></PostComments>
      </CardFooter>
    </Card>
  );
};

export default Post;
