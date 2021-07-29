import * as Styled from './Home.element';
import Mansory from 'components/UI/Mansory/Mansory';
import MansoryItem from 'components/UI/Mansory/MansoryItem';
import CreatePost from 'components/CreatePost';
import PostCard from 'components/PostCard';

import posts from 'data/posts';

const Home = () => {
  const getPosts = posts.map((post) => (
    <MansoryItem key={post.id}>
      <PostCard post={post}></PostCard>
    </MansoryItem>
  ));

  return (
    <Styled.HomeContainer>
      <Mansory>
        <MansoryItem>
          <CreatePost></CreatePost>
        </MansoryItem>
        {getPosts}
      </Mansory>
    </Styled.HomeContainer>
  );
};

export default Home;
