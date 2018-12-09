import Sound from 'react-sound';
/**
 * Actions
 */
export const Types = {
  LOAD: 'player/LOAD',
  PLAY: 'player/PLAY',
  PAUSE: 'player/PAUSE',
  NEXT: 'player/NEXT',
  PREV: 'player/PREV',
  PLAYING: 'player/PLAYING',
  HANDLE_POSITION: 'player/HANDLE_POSITION',
  SET_POSITION: 'player/SET_POSITION',
  SET_VOLUME: 'player/SET_VOLUME',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  currentSong: null,
  list: [],
  status: Sound.status.PLAYING,
  positionShown: null,
  position: null,
  duration: null,
  volume: 30,
};

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD:
      return {
        ...state,
        currentSong: action.payload.song,
        list: action.payload.list,
        status: Sound.status.PLAYING,
        position: null,
      };
    case Types.PLAY:
      return { ...state, status: Sound.status.PLAYING };
    case Types.PAUSE:
      return { ...state, status: Sound.status.PAUSED };
    case Types.NEXT: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const next = state.list[currentIndex + 1];
      if (next) {
        return {
          ...state,
          position: null,
          currentSong: next,
          status: Sound.status.PLAYING,
        };
      }
      return state;
    }
    case Types.PREV: {
      const currentIndex = state.list.findIndex(song => song.id === state.currentSong.id);
      const prev = state.list[currentIndex - 1];
      if (prev) {
        return {
          ...state,
          position: null,
          currentSong: prev,
          status: Sound.status.PLAYING,
        };
      }
      return state;
    }
    case Types.PLAYING:
      return {
        ...state,
        duration: action.payload.data.duration,
        position: action.payload.data.position,
      };
    case Types.HANDLE_POSITION:
      return { ...state, positionShown: state.duration * action.payload.percent };
    case Types.SET_POSITION:
      return { ...state, position: state.duration * action.payload.percent, positionShown: null };
    case Types.SET_VOLUME:
      return { ...state, volume: action.payload.volume };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  loadSong: (song, list) => ({
    type: Types.LOAD,
    payload: { song, list },
  }),
  playSong: () => ({ type: Types.PLAY }),
  pauseSong: () => ({ type: Types.PAUSE }),
  nextSong: () => ({ type: Types.NEXT }),
  prevSong: () => ({ type: Types.PREV }),
  playingSong: data => ({
    type: Types.PLAYING,
    payload: { data },
  }),
  handlePositionSong: percent => ({
    type: Types.HANDLE_POSITION,
    payload: { percent },
  }),
  setPositionSong: percent => ({
    type: Types.SET_POSITION,
    payload: { percent },
  }),

  setVolumeSong: volume => ({
    type: Types.SET_VOLUME,
    payload: { volume },
  }),
};
