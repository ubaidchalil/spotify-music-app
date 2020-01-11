import React from 'react';
import {Text} from 'react-native';
import Style from '../styles';
const Label = ({text}) => <Text style={Style.labelTextStyle}>{text}</Text>;
export default Label;
