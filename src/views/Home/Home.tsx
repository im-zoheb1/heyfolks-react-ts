import { HomeContainer } from './Home.element';
import Mansory from 'components/UI/Mansory/Mansory';
import MansoryItem from 'components/UI/Mansory/MansoryItem';

import CreatePost from 'components/CreatePost';

const Home = () => {
  return (
    <HomeContainer>
      <Mansory>
        <MansoryItem>
          <CreatePost></CreatePost>
        </MansoryItem>
      </Mansory>
    </HomeContainer>
  );
};

export default Home;
