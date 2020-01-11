import {reccomTracksState} from '../action/recommended-playlist-action';
const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const recommendedTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case reccomTracksState.LOADING:
      return {...state, loading: action.state};
    case reccomTracksState.DONE:
      return {
        ...state,
        data: action.state ? action.state.playlists.items : action.state,
      };
    case reccomTracksState.ERROR:
      return {...state, error: action.state};
    default:
      return state;
  }
};
