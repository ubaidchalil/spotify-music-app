import React from 'react';
import {View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IconButton from '../icon-button';
import Details from './details';
import Styles from '../styles';
import {Colors} from '../../utilities/theme';
import {calcHeight} from '../../utilities/screen-config';
EvilIcons.loadFont();
const TrackDetails = ({name, artist, album, duration, hideModal}) => (
  <View style={Styles.trackDetailContainerStyle}>
    <IconButton onPress={hideModal} iconName={'chevron-down'} />
    <View style={Styles.modalIconStyle}>
      <EvilIcons name="play" size={calcHeight(18)} color={Colors.iconColor} />
    </View>
    <Details album={album} name={name} artist={artist} duration={duration} />
  </View>
);

export default TrackDetails;
