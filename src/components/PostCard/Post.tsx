// SIMPLE CARD COMPONENTS
import Card from 'components/UI/Card';
import CardBody from 'components/UI/Card/CardBody';
import CardFooter from 'components/UI/Card/CardFooter';
// POST CARD COMPONENTS
import PostHeader from './PostHeader';
import PostBody from './PostBody';
import PostActions from './PostHeader';
import PostComments from './PostComments';

const Post = () => {
  return (
    <Card>
      <CardBody>
        <PostHeader></PostHeader>
        <PostBody></PostBody>
      </CardBody>
      <CardFooter>
        <PostActions></PostActions>
        <PostComments></PostComments>
      </CardFooter>
    </Card>
  );
};

export default Post;
