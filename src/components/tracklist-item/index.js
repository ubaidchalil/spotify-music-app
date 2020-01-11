import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import Label from '../label';
import Title from '../title';
import Styles from '../styles';
const TrackListItem = ({name, artistName, imageUrl, popularity, onPress}) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={Styles.trackListItemContainerStyle}>
    <View style={Styles.trackListImageContainerStyle}>
      <Image style={Styles.trackListImageStyle} source={{uri: imageUrl}} />
    </View>

    <View style={Styles.trackListDetailContainerStyle}>
      <Title text={name.length > 17 ? `${name.substring(0, 17)}..` : name} />
      <Label
        text={
          artistName.length > 17
            ? `${artistName.substring(0, 17)}..`
            : artistName
        }
      />
    </View>
    <View style={Styles.popularityContanerStyle}>
      <Label text={`Popularity: ${popularity}`} />
    </View>
  </TouchableOpacity>
);

export default TrackListItem;
