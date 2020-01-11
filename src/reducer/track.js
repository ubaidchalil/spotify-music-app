import {trackState} from '../action/track-action';
const initialState = {
  loading: false,
  error: null,
  data: null,
};

export const trackReducer = (state = initialState, action) => {
  switch (action.type) {
    case trackState.LOADING:
      return {...state, loading: action.state};
    case trackState.DONE:
      return {
        ...state,
        data: action.state,
      };
    case trackState.ERROR:
      return {...state, error: action.state};
    default:
      return state;
  }
};
