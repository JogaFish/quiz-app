import './App.css'
import QuizPreview from './components/quizPreview/quizPreview'
import { quizzes } from './data/quizDetails'

function App() {
  const handleQuizClick = (quizId: string) => {
    console.log('Selected quiz:', quizId)
    // TODO: Navigate to quiz or show quiz details
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Quiz App</h1>
        <p>Choose a quiz to get started</p>
      </header>
      
      <div className="quiz-scroller">
        {quizzes.map((quiz) => (
          <QuizPreview
            key={quiz.id}
            quiz={quiz}
            onClick={handleQuizClick}
          />
        ))}
      </div>
    </div>
  )
}

export default App
