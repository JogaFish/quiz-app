import './App.css'
import QuizPreview from './components/quizPreview/QuizPreview'
import { quizzes } from './data/quizzes'

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
      
      <main className="app-main">
        <div className="quiz-scroller">
          {quizzes.map((quiz) => (
            <QuizPreview
              key={quiz.id}
              quiz={quiz}
              onClick={handleQuizClick}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
