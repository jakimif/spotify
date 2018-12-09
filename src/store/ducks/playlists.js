/**
 * Actions
 */
export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getPlayListRequest: () => ({ type: Types.GET_REQUEST }),
  getPlayListSuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),
};
