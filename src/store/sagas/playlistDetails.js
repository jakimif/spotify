import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as playlistDetailsActions } from '../ducks/playlistDetails';

export function* getPlaylistDetails(action) {
  try {
    const { id } = action.payload;
    const response = yield call(api.get, `/playlists/${id}?_embed=songs`);
    yield put(playlistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    console.log('error!');
  }
}
