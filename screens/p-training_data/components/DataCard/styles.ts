

import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48 - 16) / 2; // 48 for horizontal margins, 16 for gap

export default StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  iconContainer: {
    position: 'relative',
    width: 64,
    height: 64,
    marginBottom: 12,
  },
  progressRing: {
    position: 'absolute',
  },
  iconWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 16,
  },
});

