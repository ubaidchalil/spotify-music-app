import React from 'react';
import {Text} from 'react-native';
import Style from '../styles';
const Header = ({text}) => <Text style={Style.headerStyle}>{text}</Text>;
export default Header;
