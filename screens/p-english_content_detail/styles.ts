

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f7ff',
  },
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
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
  contentArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  contentInfoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  contentInfoHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  contentInfoTextContainer: {
    flex: 1,
    marginRight: 16,
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  contentMetaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  contentMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contentMetaText: {
    fontSize: 14,
    color: '#6b7280',
  },
  contentIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  vocabContentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
  },
  vocabList: {
    gap: 12,
  },
  vocabFooter: {
    alignItems: 'center',
    marginTop: 16,
  },
  vocabFooterText: {
    fontSize: 14,
    color: '#6b7280',
  },
  grammarContentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  grammarContent: {
    gap: 16,
  },
  grammarItem: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  grammarItemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  grammarItemDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  grammarRulesContainer: {
    gap: 8,
  },
  grammarRuleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  grammarRuleTag: {
    backgroundColor: '#02f2ce1A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  grammarRuleTagText: {
    fontSize: 12,
    color: '#02f2ce',
    fontWeight: '500',
  },
  grammarRuleText: {
    fontSize: 14,
    color: '#1f2937',
  },
  listeningContentCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
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
  listeningContent: {
    gap: 16,
  },
  listeningTextContainer: {
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  listeningTextTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  listeningTextContent: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  startLearningContainer: {
    paddingBottom: 32,
  },
  startLearningButton: {
    borderRadius: 16,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#02f2ce',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  startLearningGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  startLearningText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
});

