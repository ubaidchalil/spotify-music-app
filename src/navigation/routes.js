import RecommendedPlayLists from '../screens/recommended-playlists';
import PlayListTracks from '../screens/playlist-tracks';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const AppNavigator = createStackNavigator({
  RecommendedPlayLists,
  PlayListTracks,
});
export default Routes = createAppContainer(AppNavigator);
