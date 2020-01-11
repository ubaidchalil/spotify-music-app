import React, {Component} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import PlayListItem from '../components/playlist-item';
import Loader from '../components/loader';
import Styles from './styles';
import {Colors} from '../utilities/theme';
import {connect} from 'react-redux';
import {getAccessTokenAction} from '../action/access-token-action';
import {getRecommendedPlaylistsAction} from '../action/recommended-playlist-action';
import * as RNLocalize from 'react-native-localize';
class RecommendedPlayLists extends Component {
  componentDidMount() {
    const countryCode = RNLocalize.getCountry();
    this.props.getRecommendedPlaylistsAction(countryCode);
    //this.props.getAccessTokenAction();
  }
  componentDidUpdate(prevProps) {
    const {recommendedTracksReducer, accessTokenReducer} = this.props;
    if (
      recommendedTracksReducer.error &&
      !prevProps.recommendedTracksReducer.error
    ) {
      if (recommendedTracksReducer.error.errorCode == '401') {
        this.props.getAccessTokenAction();
      }
    }

    if (accessTokenReducer.token && !prevProps.accessTokenReducer.token) {
      const countryCode = RNLocalize.getCountry();
      this.props.getRecommendedPlaylistsAction(countryCode);
    }
  }
  render() {
    const {recommendedTracksReducer, accessTokenReducer} = this.props;
    const playLists = recommendedTracksReducer.data
      ? recommendedTracksReducer.data
      : [];
    const loading =
      recommendedTracksReducer.loading || accessTokenReducer.loading;
    return (
      <View style={Styles.containerStyle}>
        <Loader loading={loading} />
        <FlatList
          numColumns={2}
          data={playLists}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('PlayListTracks', {id: item.id})
              }
              id={index}>
              <PlayListItem
                id={index}
                title={item.name}
                imageUrl={item.images[0].url}
                noTracks={item.tracks.total}
                index={index}
              />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

RecommendedPlayLists.navigationOptions = {
  title: 'Recommended Playlists',
  headerStyle: Styles.headerStyle,
  headerTintColor: Colors.labelColor,
  headerTitleStyle: Styles.headerTitleStyle,
  //headerLeft: <IconButton onPress={()=>this.props.navigation.navig}/>,
};

const mapStateToProps = ({accessTokenReducer, recommendedTracksReducer}) => ({
  accessTokenReducer,
  recommendedTracksReducer,
});

const mapDispatchToProps = dispatch => ({
  getAccessTokenAction: () => dispatch(getAccessTokenAction()),
  getRecommendedPlaylistsAction: payload =>
    dispatch(getRecommendedPlaylistsAction(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RecommendedPlayLists);
