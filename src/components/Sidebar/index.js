import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistActions } from '../../store/ducks/playlists';
import { Container, NewPlaylist, Nav } from './styles';

import AddPlayListIcon from '../../aseets/images/add_playlist.svg';

class Sidebar extends Component {
  static propTypes = {
    getPlayListRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          description: PropTypes.string,
          thumbnail: PropTypes.string,
        }),
      ),
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlayListRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <Link to="/">Radio</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <Link to="/">Seu Daily Mix</Link>
            </li>
            <li>
              <Link to="/">Tocados recentente</Link>
            </li>
            <li>
              <Link to="/">Musicas</Link>
            </li>
            <li>
              <Link to="/">Álbuns</Link>
            </li>
            <li>
              <Link to="/">Artistas</Link>
            </li>
            <li>
              <Link to="/">Estações</Link>
            </li>
            <li>
              <Link to="/">Vídeos</Link>
            </li>
            <li>
              <Link to="/">Podcasts</Link>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlayListIcon} alt="Adicionar PlayList" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
