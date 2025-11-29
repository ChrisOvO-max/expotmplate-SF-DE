

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayTouchable: {
    flex: 1,
  },
  content: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: Platform.select({
      ios: 34,
      android: 24,
    }),
    maxHeight: screenHeight * 0.7,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
    minHeight: 200,
  },
  timeColumn: {
    alignItems: 'center',
    flex: 1,
  },
  timeLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
    fontWeight: '500',
  },
  timeList: {
    height: 160,
    minWidth: 80,
  },
  timeItem: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 2,
  },
  timeItemSelected: {
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
  },
  timeItemText: {
    fontSize: 18,
    color: '#6b7280',
    fontWeight: '500',
  },
  timeItemTextSelected: {
    fontSize: 24,
    color: '#02f2ce',
    fontWeight: '600',
  },
  timeSeparator: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    height: 160,
  },
  timeSeparatorText: {
    fontSize: 30,
    color: '#1f2937',
    fontWeight: 'bold',
  },
  confirmButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  confirmButtonGradient: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

