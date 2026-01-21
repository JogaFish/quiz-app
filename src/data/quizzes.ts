export interface Quiz {
  id: string
  title: string
  description: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
  questionCount: number
  estimatedTime: number // in minutes
}

export const quizzes: Quiz[] = [
  {
    id: '1',
    title: 'General Knowledge',
    description: 'Test your knowledge across various topics',
    category: 'General',
    difficulty: 'easy',
    questionCount: 10,
    estimatedTime: 5,
  },
  {
    id: '2',
    title: 'Science & Technology',
    description: 'Questions about science, tech, and innovation',
    category: 'Science',
    difficulty: 'medium',
    questionCount: 15,
    estimatedTime: 10,
  },
  {
    id: '3',
    title: 'World History',
    description: 'Historical events and facts from around the world',
    category: 'History',
    difficulty: 'hard',
    questionCount: 20,
    estimatedTime: 15,
  },
  {
    id: '4',
    title: 'Pop Culture',
    description: 'Movies, music, TV shows, and celebrities',
    category: 'Entertainment',
    difficulty: 'easy',
    questionCount: 12,
    estimatedTime: 8,
  },
  {
    id: '5',
    title: 'Geography',
    description: 'Countries, capitals, landmarks, and more',
    category: 'Geography',
    difficulty: 'medium',
    questionCount: 15,
    estimatedTime: 10,
  },
]
