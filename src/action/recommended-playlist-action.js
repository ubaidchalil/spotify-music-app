import {Fetcher, getToken} from '../utilities/fecther';
import {AppConstants} from '../constants/app-constatnts';
export const reccomTracksState = {
  LOADING: 'RECOMM_TRACKS_LOADING',
  ERROR: 'RECOMM_TRACKS_ERROR',
  DONE: 'RECOMM_TRACKS_DONE',
  SUCCESS: 'RECOMM_TRACKS_SUCCESS',
};

const RECOMME_API_URL = `${AppConstants.API_URL}browse/featured-playlists`;

export const getRecommendedPlaylistsAction = country => dispatch => {
  const token = getToken();
  return Fetcher(
    async () => {
      const result = await fetch(`${RECOMME_API_URL}?country=${country}`, {
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
    reccomTracksState,
    dispatch,
  );
};
