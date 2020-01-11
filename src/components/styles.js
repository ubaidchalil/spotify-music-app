import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {calcHeight, calcWidth} from '../utilities/screen-config';
import {Colors} from '../utilities/theme';
export default StyleSheet.create({
  playListItemContainerStyle: {
    paddingBottom: calcHeight(1),
    marginBottom: calcHeight(1),
    width: calcWidth(46),
    backgroundColor: Colors.secondaryColor,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: calcHeight(1),
    paddingTop: calcHeight(1),
  },
  trackListItemContainerStyle: {
    paddingBottom: calcHeight(1.2),
    marginBottom: calcHeight(1.2),
    paddingHorizontal: calcHeight(1.2),
    marginHorizontal: calcHeight(1.2),
    backgroundColor: Colors.secondaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: calcHeight(1),
    paddingTop: calcHeight(1),
  },
  imageContainerStyle: {
    borderRadius: calcHeight(5),
    paddingVertical: calcHeight(0.6),
  },
  trackListDetailContainerStyle: {
    paddingHorizontal: calcWidth(5),
  },
  trackListImageStyle: {
    width: calcHeight(8),
    height: calcHeight(8),
    borderRadius: calcHeight(1),
  },
  playListImageStyle: {
    width: calcHeight(18.6),
    height: calcHeight(18.6),
    borderRadius: calcHeight(1),
  },

  popularityContanerStyle: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-end',
  },
  labelTextStyle: {
    color: Colors.labelColor,
    fontSize: RFValue(13.3),
    padding: calcHeight(0.2),
  },
  titleStyle: {
    fontSize: RFValue(13),
    fontWeight: 'bold',
    color: Colors.labelColor,
    padding: calcHeight(0.2),
  },
  iconButtonContainerStyle: {
    paddingTop: calcHeight(4),
    paddingLeft: calcHeight(1),
  },

  detailContainerStyle: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingVertical: calcHeight(15),
    paddingHorizontal: calcHeight(1),
  },
  trackDetailContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  modalIconStyle: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  headerStyle: {
    color: Colors.labelColor,
    fontWeight: 'bold',
    fontSize: RFValue(20),
  },
  detialItemStyle: {
    flex: 1,
    paddingHorizontal: calcHeight(1),
    paddingBottom: calcHeight(2.5),
  },
  detailDurationStyle: {
    margin: calcHeight(1),
    marginBottom: calcHeight(6),
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackgroundStyle: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  overlayStyle: {
    backgroundColor: Colors.overlayColor,
    ...StyleSheet.absoluteFillObject,
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.modalBackgroundColor,
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.modalColor,
    height: calcHeight(13),
    width: calcHeight(13),
    borderRadius: calcHeight(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
