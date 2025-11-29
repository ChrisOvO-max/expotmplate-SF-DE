

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  cardInner: {
    position: 'relative',
    height: 80,
  },
  cardSide: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f9fafb',
    backfaceVisibility: 'hidden',
  },
  cardFront: {
    zIndex: 2,
  },
  cardBack: {
    zIndex: 1,
  },
  frontContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  wordInfo: {
    flex: 1,
  },
  word: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 2,
  },
  phonetics: {
    fontSize: 14,
    color: '#6b7280',
  },
  meaning: {
    fontSize: 14,
    color: '#02f2ce',
    fontWeight: '500',
    marginTop: 4,
    marginBottom: 8,
  },
  example: {
    fontSize: 12,
    color: '#6b7280',
    lineHeight: 16,
  },
});

