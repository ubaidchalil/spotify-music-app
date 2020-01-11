import {accessTokenState} from '../action/access-token-action';
const initialState = {
  loading: false,
  error: null,
  token: null,
};

export const accessTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case accessTokenState.LOADING:
      return {...state, loading: action.state};
    case accessTokenState.DONE:
      return {
        ...state,
        token: action.state,
      };
    case accessTokenState.ERROR:
      return {...state, error: action.state};
    default:
      return state;
  }
};
