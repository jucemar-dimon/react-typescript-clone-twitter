import React from 'react';

import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  EmailIcon,
  BellIcon,
} from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Jucemar Dimon</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>
      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </BottomMenu>
    </Container>
  );
};

export default Main;
