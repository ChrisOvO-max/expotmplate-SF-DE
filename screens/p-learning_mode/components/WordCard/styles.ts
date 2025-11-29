

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginBottom: 24,
  },
  cardTouchable: {
    width: '100%',
    height: 192,
    position: 'relative',
  },
  cardSide: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
  cardFront: {
    zIndex: 2,
  },
  cardBack: {
    zIndex: 1,
  },
  cardGradient: {
    flex: 1,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
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
  wordText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  phoneticText: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    gap: 8,
  },
  hintText: {
    fontSize: 14,
    color: '#6b7280',
  },
  meaningText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
    textAlign: 'center',
  },
  partText: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  exampleContainer: {
    width: '100%',
    marginBottom: 8,
  },
  exampleLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  exampleText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  translationContainer: {
    width: '100%',
    marginBottom: 16,
  },
  translationLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  translationText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  backHintContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backHintText: {
    fontSize: 12,
    color: '#6b7280',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  knowButton: {
    flex: 1,
    backgroundColor: '#02f2ce',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  knowButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
  },
  unknownButton: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingVertical: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  unknownButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
});

