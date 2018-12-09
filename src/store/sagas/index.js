import { all, takeLatest } from 'redux-saga/effects';

import { Types as PlaylistsTypes } from '../ducks/playlists';
import { Types as PlaylistsDetailsTypes } from '../ducks/playlistDetails';

import { getPlaylists } from './playlists';
import { getPlaylistDetails } from './playlistDetails';

export default function* root() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistsDetailsTypes.GET_REQUEST, getPlaylistDetails),
  ]);
}
