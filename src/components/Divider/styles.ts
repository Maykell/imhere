import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

function getStyle(marginVertical: number = 8) {
  return StyleSheet.create({
    container: {
      width: '100%',
      height: 1,
      backgroundColor: colors.gray,
      marginVertical: marginVertical,
    },
  });
}

export { getStyle };
