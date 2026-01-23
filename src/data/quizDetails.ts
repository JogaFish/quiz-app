export interface QuizDetails {
  id: string
  title: string
  description: string
  category: string
}

export const quizzes: QuizDetails[] = [
  {
    id: '1',
    title: 'Capitals of the World',
    description: 'Guess the capital from the country name.',
    category: 'Geography',
  },
]
