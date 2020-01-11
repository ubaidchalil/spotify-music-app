import React from 'react';
import {View, ImageBackground, StyleSheet, Modal} from 'react-native';
import TrackDetails from './track-details';
import Styles from '../styles';
import {convertMilliSecToDuration} from '../../utilities/util';
const TrackModal = ({data, hideModal, visible}) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={this.hideModal}>
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: data ? data.album.images[0].url : 'NA',
      }}
      style={Styles.imageBackgroundStyle}>
      <View style={Styles.overlayStyle}>
        <TrackDetails
          album={data ? data.album.name : 'NA'}
          artist={data ? data.artists[0].name : 'NA'}
          duration={convertMilliSecToDuration(data ? data.duration_ms : 0)}
          name={data ? data.name : 'NA'}
          hideModal={hideModal}
        />
      </View>
    </ImageBackground>
  </Modal>
);

export default TrackModal;
