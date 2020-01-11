import React from 'react';
import {View, Text, Image} from 'react-native';
import Label from '../label';
import Title from '../title';
import Styles from '../styles';
import {calcHeight} from '../../utilities/screen-config';
const PlayListItem = ({title, imageUrl, noTracks, index}) => (
  <View
    style={[
      Styles.playListItemContainerStyle,
      {
        paddingHorizontal: (index + 1) % 2 == 0 ? 0 : calcHeight(1),
        marginHorizontal: (index + 1) % 2 == 0 ? 0 : calcHeight(1),
      },
    ]}>
    <View style={Styles.imageContainerStyle}>
      <Image style={Styles.playListImageStyle} source={{uri: imageUrl}} />
    </View>
    <Title text={title.length > 18 ? `${title.substring(0, 18)}..` : title} />
    <Label text={`No of tracks : ${noTracks}`} />
  </View>
);

export default PlayListItem;
