import {store} from '../store';

export const checkResult = (result, dispatch, setError) => {
  if (result.status) {
    return true;
  }
  dispatch(
    setError({
      data: JSON.stringify(result.data.error),
      errorCode: result.data.error.status,
    }),
  );
  return false;
};

export const setInStore = (state, type) => ({
  type,
  state,
});

export const getToken = () => {
  const {
    accessTokenReducer: {token},
  } = store.getState();
  return token;
};

export const Fetcher = async (fetch, type, dispatch) => {
  dispatch(setInStore(true, type.LOADING));
  dispatch(setInStore(null, type.DONE));
  dispatch(setInStore(null, type.ERROR));
  try {
    const result = await fetch();
    if (checkResult(result, dispatch, error => setInStore(error, type.ERROR))) {
      dispatch(setInStore(result.data, type.DONE));
    } else {
      dispatch(setInStore(null, type.DONE));
    }
  } catch (error) {
    console.log('error1==>', error);
    dispatch(setInStore(null, type.DONE));
    dispatch(setInStore({errorCode: '000', data: error}, type.ERROR));
  }
  dispatch(setInStore(false, type.LOADING));
};
