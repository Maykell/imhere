import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
    marginLeft: 16,
  },
});
