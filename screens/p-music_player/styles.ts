

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  scrollView: {
    flex: 1,
  },
  
  // 顶部导航栏
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  
  // 音乐信息区域
  musicInfoSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: 'center',
  },
  coverContainer: {
    marginBottom: 24,
  },
  visualizer: {
    width: 256,
    height: 256,
    borderRadius: 128,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  visualizerBar: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2,
  },
  bar1: {
    width: 4,
    height: 16,
    top: 16,
    left: '50%',
    marginLeft: -2,
  },
  bar2: {
    width: 4,
    height: 24,
    top: 24,
    left: '25%',
    marginLeft: -2,
  },
  bar3: {
    width: 4,
    height: 32,
    top: 32,
    right: '25%',
    marginRight: -2,
  },
  bar4: {
    width: 4,
    height: 20,
    bottom: 24,
    left: '33%',
    marginLeft: -2,
  },
  bar5: {
    width: 4,
    height: 28,
    bottom: 32,
    right: '33%',
    marginRight: -2,
  },
  coverImage: {
    width: 192,
    height: 192,
    borderRadius: 96,
    borderWidth: 4,
    borderColor: '#ffffff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 16,
      },
      android: {
        elevation: 12,
      },
    }),
  },
  musicDetails: {
    alignItems: 'center',
    marginBottom: 32,
  },
  musicTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  musicArtist: {
    fontSize: 18,
    color: '#6b7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#02f2ce',
    marginLeft: 8,
  },
  
  // 播放进度区域
  progressSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  timeText: {
    fontSize: 14,
    color: '#6b7280',
  },
  progressSlider: {
    width: '100%',
    height: 40,
  },
  sliderThumb: {
    width: 20,
    height: 20,
    backgroundColor: '#02f2ce',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  // 播放控制区域
  controlsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  controlButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  playButtonGradient: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // 音量和收藏区域
  volumeSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  volumeCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  volumeControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  volumeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  volumeIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(2, 150, 242, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  volumeLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  volumeSliderContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  volumeSlider: {
    width: '100%',
    height: 40,
  },
  volumeSliderThumb: {
    width: 16,
    height: 16,
    backgroundColor: '#6b7280',
  },
  muteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherControls: {
    flexDirection: 'row',
    gap: 16,
  },
  otherControlButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
  },
  otherControlText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
  },
  
  // 推荐音乐
  recommendationsSection: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 16,
  },
  recommendationsList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  recommendationCover: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  recommendationInfo: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginBottom: 4,
  },
  recommendationArtist: {
    fontSize: 14,
    color: '#6b7280',
  },
  recommendationPlayButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(2, 242, 206, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

