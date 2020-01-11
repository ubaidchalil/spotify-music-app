import React from 'react';
import {TouchableOpacity} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Styles from '../styles';
import {Colors} from '../../utilities/theme';
import {calcHeight} from '../../utilities/screen-config';

const IconButton = ({iconName, onPress}) => (
  <TouchableOpacity onPress={onPress} style={Styles.iconButtonContainerStyle}>
    <EvilIcons name={iconName} size={calcHeight(8)} color={Colors.iconColor} />
  </TouchableOpacity>
);

export default IconButton;
