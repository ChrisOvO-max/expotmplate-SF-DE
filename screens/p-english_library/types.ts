

export type CategoryFilter = 'all' | 'vocabulary' | 'grammar' | 'listening' | 'reading' | 'writing';

export type DifficultyFilter = 'all' | 'easy' | 'medium' | 'hard';

export interface ContentItemData {
  id: string;
  title: string;
  description: string;
  type: CategoryFilter;
  difficulty: DifficultyFilter;
  duration: number;
  progress: number;
  icon: string;
  iconColor: string;
}

export interface FilterSectionProps {
  selectedCategory: CategoryFilter;
  selectedDifficulty: DifficultyFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onDifficultyChange: (difficulty: DifficultyFilter) => void;
}

export interface ContentItemProps {
  data: ContentItemData;
  onPress: () => void;
}

