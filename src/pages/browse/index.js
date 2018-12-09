import React from 'react';

import {
  Container, Title, List, PlayList,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <PlayList to="/playlists/1">
        <img src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </PlayList>
      <PlayList to="/playlists/1">
        <img src="https://spark.adobe.com/images/landing/examples/create-album-cover.jpg" alt="Playlist" />
        <strong>Rock dos bons</strong>
        <p>Relaxe enquanto você programa ouvindo apenas as melhores do rock mundial.</p>
      </PlayList>
    </List>
  </Container>
);

export default Browse;
