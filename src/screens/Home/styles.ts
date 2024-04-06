import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 24,
  },
  eventName: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  eventDate: {
    color: colors.gray,
    fontSize: 16,
    fontWeight: 'bold',
  },
  eventInput: {
    flex: 1,
    height: 56,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 8,
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  emptyListContentContainer: {
    flex: 1,
  },
  emptyListContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.gray,
  },
});
