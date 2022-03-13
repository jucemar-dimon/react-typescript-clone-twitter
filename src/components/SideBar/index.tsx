import React from 'react';
import List from '../List';
import FollowSuggestions from '../FollowSuggestions';
import News from '../News';
import type StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWraper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWraper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWraper>
      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestions name="Jucemar" nickname="@jucemar-dimon" />,
              <FollowSuggestions name="Jucemar" nickname="@jucemar-dimon" />,
              <FollowSuggestions name="Jucemar" nickname="@jucemar-dimon" />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News></News>, <News></News>, <News></News>]}
          />
          <List
            title="Talvez você curta"
            elements={[<News></News>, <News></News>, <News></News>]}
          />
          <List
            title="Talvez você curta"
            elements={[<News></News>, <News></News>, <News></News>]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;
