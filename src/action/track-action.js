import {Fetcher, getToken} from '../utilities/fecther';
import {AppConstants} from '../constants/app-constatnts';
export const trackState = {
  LOADING: 'TRACK_LOADING',
  ERROR: 'TRACK_ERROR',
  DONE: 'TRACK_DONE',
  SUCCESS: 'TRACK_SUCCESS',
};

const TRACK_API_URL = `${AppConstants.API_URL}tracks`;

export const getTrackAction = track_id => dispatch => {
  const token = getToken();
  return Fetcher(
    async () => {
      const result = await fetch(`${TRACK_API_URL}/${track_id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${
            token ? token.access_token : AppConstants.DUMMY_TOKEN
          }`,
          Accept: 'application/json',
        },
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok,
        code: result.status,
      }));
    },
    trackState,
    dispatch,
  );
};
