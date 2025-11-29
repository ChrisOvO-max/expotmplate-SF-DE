

import { StyleSheet, Platform, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 64) / 2; // 24px margin on each side + 16px gap

export default StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeBadge: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  changeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
  },
});

