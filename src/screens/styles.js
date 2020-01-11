import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../utilities/screen-config';
import {Colors} from '../utilities/theme';
export default StyleSheet.create({
  containerStyle: {
    flex: 1,
    paddingVertical: calcHeight(2),
    backgroundColor: Colors.primaryColor,
  },
  headerStyle: {
    backgroundColor: Colors.primaryColor,
    textAlign: 'center',
  },

  headerTitleStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    color: Colors.labelColor,
  },
});
