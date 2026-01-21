import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to Quiz App</h1>
        <p>A modern React application</p>
      </header>
      
      <main className="app-main">
        <div className="card">
          <h2>Get Started</h2>
          <p>This is your new React application built with Vite.</p>
          
          <div className="counter-section">
            <button onClick={() => setCount((count) => count + 1)}>
              Count is {count}
            </button>
          </div>
          
          <p className="hint">
            Edit <code>src/App.tsx</code> to get started building your quiz app!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
