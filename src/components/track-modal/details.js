import React from 'react';
import {View, Text} from 'react-native';
import Styles from '../styles';
import Title from '../title';
import Header from '../header';
const Details = ({name, artist, album, duration}) => (
  <View style={Styles.detailContainerStyle}>
    <View style={Styles.detialItemStyle}>
      <Header text={name} />
      <Title text={artist} />
      <Title text={album} />
    </View>
    <View style={Styles.detailDurationStyle}>
      <Title text={duration} />
    </View>
  </View>
);

export default Details;
