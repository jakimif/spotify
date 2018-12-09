import React from 'react';

import { Container, NewPlaylist, Nav } from './styles';

import AddPlayListIcon from '../../aseets/images/add_playlist.svg';

const Sidebar = () => (
  <Container>
    <div>
      <Nav main>
        <li>
          <a>Navegar</a>
        </li>
        <li>
          <a>Radio</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a>Seu Daily Mix</a>
        </li>
        <li>
          <a>Tocados recentente</a>
        </li>
        <li>
          <a>Musicas</a>
        </li>
        <li>
          <a>Álbuns</a>
        </li>
        <li>
          <a>Artistas</a>
        </li>
        <li>
          <a href="#">Estações</a>
        </li>
        <li>
          <a href="#">Vídeos</a>
        </li>
        <li>
          <a href="#">Podcasts</a>
        </li>
      </Nav>
      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a>Melhores do rock</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={AddPlayListIcon} alt="Adicionar PlayList" />
      Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
