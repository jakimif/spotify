import Sound from 'react-sound';
/**
 * Actions
 */
export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  currentSong: null,
  status: Sound.status.PLAYING,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return { ...state, currentSong: action.payload.song, status: Sound.status.PLAYING };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  loadSong: song => ({
    type: Types.LOAD,
    payload: { song },
  }),
  playSong: () => ({ type: Types.PLAY }),
  pauseSong: () => ({ type: Types.PAUSE }),
};
