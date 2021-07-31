import * as Styled from './SearchBar.element';

import Card from 'components/UI/Card';
import CardBody from 'components/UI/Card/CardBody';

const SearchBar = () => {
  return (
    <Card>
      <CardBody>
        <Styled.SearchBar>
          <Styled.SearchBarIcon className="bx bx-search bx-flip-horizontal"></Styled.SearchBarIcon>
          <Styled.SearchBarInput placeholder="Search..."></Styled.SearchBarInput>
        </Styled.SearchBar>
      </CardBody>
    </Card>
  );
};

export default SearchBar;
