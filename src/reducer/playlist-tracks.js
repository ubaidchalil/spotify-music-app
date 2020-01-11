import {playListTracksState} from '../action/playlist-tracks-action';
const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const playListTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case playListTracksState.LOADING:
      return {...state, loading: action.state};
    case playListTracksState.DONE:
      return {
        ...state,
        data: action.state ? action.state.tracks.items : action.state,
      };
    case playListTracksState.ERROR:
      return {...state, error: action.state};
    default:
      return state;
  }
};
