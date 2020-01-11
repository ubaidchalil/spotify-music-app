import {Dimensions, PixelRatio} from 'react-native';
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);
export const calcWidth = x =>
  PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
