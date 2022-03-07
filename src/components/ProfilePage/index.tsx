import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Jucemar Dimon</h1>
        <h2>@jucemar-dimon</h2>
        <p>
          Developer at <a href="https://app.rocketseat.com.br">@Rocketseat</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            Florianópolis, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 01 de janeiro de 2021
          </li>
        </ul>
        <Followage>
          <span>
            Seguindo <strong>94</strong>
          </span>
          <span>
            <strong>63 </strong>seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
