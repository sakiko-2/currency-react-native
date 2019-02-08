import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $underlayColor: '$border',
  row: {
    alignItems: 'center',
    backgroundColor: '$white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    color: '$darkText',
  },
  separator: {
    backgroundColor: '$border',
    flex: 1,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconVisible: {
    backgroundColor: '$primaryBlue',
  },
  checkIcon: {
    width: 18,
  },
});

export default styles;
