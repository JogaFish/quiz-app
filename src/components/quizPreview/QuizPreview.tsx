import { QuizDetails } from '../../data/quizDetails'
import './quizPreview.css'

interface QuizPreviewProps {
  quiz: QuizDetails
  onClick?: (quizId: string) => void
}

function QuizPreview({ quiz, onClick }: QuizPreviewProps) {
  const handleClick = () => {
    onClick?.(quiz.id)
  }

  return (
    <div className="quiz-preview" onClick={handleClick}>
      <div className="quiz-preview__header">
        <h3 className="quiz-preview__title">{quiz.title}</h3>
      </div>
      <p className="quiz-preview__description">{quiz.description}</p>
      <div className="quiz-preview__meta">
        <span className="quiz-preview__category">{quiz.category}</span>
      </div>
    </div>
  )
}

export default QuizPreview
