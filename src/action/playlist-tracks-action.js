import {Fetcher, getToken} from '../utilities/fecther';
import {AppConstants} from '../constants/app-constatnts';
export const playListTracksState = {
  LOADING: 'PLAYLIST_TRACKS_LOADING',
  ERROR: 'PLAYLIST_TRACKS_ERROR',
  DONE: 'PLAYLIST_TRACKS_DONE',
  SUCCESS: 'PLAYLIST_TRACKS_SUCCESS',
};

const PLAYLIST_TRACK_API_URL = `${AppConstants.API_URL}playlists`;

export const getPlayListTrackAction = playlist_id => dispatch => {
  const token = getToken();
  return Fetcher(
    async () => {
      const result = await fetch(`${PLAYLIST_TRACK_API_URL}/${playlist_id}`, {
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
    playListTracksState,
    dispatch,
  );
};
