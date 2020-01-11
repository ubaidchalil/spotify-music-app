import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TrackListItem from '../components/tracklist-item';
import TrackModal from '../components/track-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Styles from './styles';
import {Colors} from '../utilities/theme';
import {connect} from 'react-redux';
import {getAccessTokenAction} from '../action/access-token-action';
import IconButton from '../components/icon-button';
import {getPlayListTrackAction} from '../action/playlist-tracks-action';
import {getTrackAction} from '../action/track-action';
import Loader from '../components/loader';
class PlayListTracks extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Track Lists',
      headerStyle: Styles.headerStyle,
      headerTintColor: Colors.labelColor,
      headerTitleStyle: Styles.headerTitleStyle,
    };
  };

  state = {
    modalVisible: false,
    trackData: null,
  };
  onTrackClick = id => {
    console.log('id==>,id', id);
    this.props.getTrackAction(id);
  };
  trackData = {
    imageUrl:
      'https://i.scdn.co/image/3e697860cdd4a09d168a5a999ae110c9a42886ea',
    album: 'Ubaid chalil',
    artist: 'mansoor khan',
    name: 'New music',
    duration: '04:13',
  };
  componentDidMount() {
    const {navigation} = this.props;
    const playlist_id = navigation.getParam('id', null);
    this.props.getPlayListTrackAction(playlist_id);
  }
  componentDidUpdate(prevProps) {
    const {
      playListTracksReducer,
      accessTokenReducer,
      trackReducer,
    } = this.props;

    if (playListTracksReducer.error && !prevProps.playListTracksReducer.error) {
      if (playListTracksReducer.error.errorCode == '401') {
        this.props.getAccessTokenAction();
      }
    }

    if (trackReducer.error && !prevProps.trackReducer.error) {
      if (trackReducer.error.errorCode == '401') {
        this.props.getAccessTokenAction();
      }
    }

    if (trackReducer.data && !prevProps.trackReducer.data) {
      this.setState({trackData: trackReducer.data}, () =>
        this.setState({modalVisible: true}),
      );
    }

    if (accessTokenReducer.token && !prevProps.accessTokenReducer.token) {
      const {navigation} = this.props;
      const playlist_id = navigation.getParam('id', null);
      this.props.getPlayListTrackAction(playlist_id);
    }
  }
  hideModal = () => this.setState({modalVisible: false});
  render() {
    const {
      playListTracksReducer,
      accessTokenReducer,
      trackReducer,
    } = this.props;

    const trackList = playListTracksReducer.data
      ? playListTracksReducer.data
      : [];
    let loading =
      playListTracksReducer.loading ||
      accessTokenReducer.loading ||
      trackReducer.loading;
    return (
      <View style={Styles.containerStyle}>
        <Loader loading={loading} />
        <FlatList
          data={trackList}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <TrackListItem
              name={item.track ? item.track.name : 'NA'}
              imageUrl={item.track ? item.track.album.images[2].url : 'NA'}
              artistName={item.track ? item.track.album.artists[0].name : 'NA'}
              popularity={item.track ? item.track.popularity : '0'}
              onPress={() => this.onTrackClick(item.track ? item.track.id : 0)}
            />
          )}
          keyExtractor={item => item.id}
        />

        <TrackModal
          visible={this.state.modalVisible}
          hideModal={this.hideModal}
          data={this.state.trackData}
        />
      </View>
    );
  }
}

// PlayListTracks.navigationOptions = {

// };

const mapStateToProps = ({
  accessTokenReducer,
  playListTracksReducer,
  trackReducer,
}) => ({
  accessTokenReducer,
  trackReducer,
  playListTracksReducer,
});

const mapDispatchToProps = dispatch => ({
  getAccessTokenAction: () => dispatch(getAccessTokenAction()),
  getPlayListTrackAction: payload => dispatch(getPlayListTrackAction(payload)),
  getTrackAction: payload => dispatch(getTrackAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayListTracks);
