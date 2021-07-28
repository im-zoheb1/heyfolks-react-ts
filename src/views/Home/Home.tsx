import { HomeContainer } from './Home.element';
import Mansory from 'components/UI/Mansory/Mansory';
import MansoryItem from 'components/UI/Mansory/MansoryItem';

import CreatePost from 'components/CreatePost';
import PostCard from 'components/PostCard';

const Home = () => {
  return (
    <HomeContainer>
      <Mansory>
        <MansoryItem>
          <CreatePost>sdf</CreatePost>
        </MansoryItem>
        <MansoryItem>
          <PostCard></PostCard>
        </MansoryItem>
      </Mansory>
    </HomeContainer>
  );
};

export default Home;
