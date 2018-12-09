import Sound from 'react-sound';
/**
 * Actions
 */
export const Types = {
  LOAD: 'player/LOAD',
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
};
