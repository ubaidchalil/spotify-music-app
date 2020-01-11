import {Fetcher} from '../utilities/fecther';
import {AppConstants} from '../constants/app-constatnts';
const base64 = require('base-64');
export const accessTokenState = {
  LOADING: 'ACCESS_TOKEN_LOADING',
  ERROR: 'ACCESS_TOKEN_ERROR',
  DONE: 'ACCESS_TOKEN_DONE',
  SUCCESS: 'ACCESS_TOKEN_SUCCESS',
};

export const getAccessTokenAction = () => dispatch => {
  var formBody = [];
  const encodedKey1 = encodeURIComponent('grant_type');
  const encodedValue1 = encodeURIComponent('refresh_token');
  formBody.push(encodedKey1 + '=' + encodedValue1);
  const encodedKey2 = encodeURIComponent('refresh_token');
  const encodedValue2 = encodeURIComponent(AppConstants.SPOTIFY_RFRESH_TOKEN);
  formBody.push(encodedKey2 + '=' + encodedValue2);

  return Fetcher(
    async () => {
      const result = await fetch(AppConstants.TOKEN_URL, {
        method: 'POST',
        headers: {
          Authorization:
            'Basic ' +
            base64.encode(
              AppConstants.SPOTIFY_CLIENT_ID +
                ':' +
                AppConstants.SPOTIFY_CLIENT_SECRET,
            ),
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.join('&'),
      });
      return result.json().then(data => ({
        data: data,
        status: result.ok,
        code: result.status,
      }));
    },
    accessTokenState,
    dispatch,
  );
};
