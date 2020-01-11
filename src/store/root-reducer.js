import AsyncStorage from '@react-native-community/async-storage';
import {persistCombineReducers} from 'redux-persist';
import {accessTokenReducer} from '../reducer/access-token';
import {playListTracksReducer} from '../reducer/playlist-tracks';
import {recommendedTracksReducer} from '../reducer/recommended-playlist';
import {trackReducer} from '../reducer/track';

const config = {
  key: 'primary',
  storage: AsyncStorage,
  whitelist: ['accessTokenReducer'],
};

const combinedReducers = {
  playListTracksReducer,
  accessTokenReducer,
  recommendedTracksReducer,
  trackReducer,
};

export default persistCombineReducers(config, combinedReducers);
