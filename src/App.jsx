import { useState } from 'react'
import './App.css'

// This array is your 5 stages. Each one is an object with an id, a title,
// and a type (whether eyes are open or closed for that stage).
// To reorder stages later, you'd just reorder this array — nothing else changes.
const phases = [
  { id: 'arrival', title: 'Arrival', type: 'visual' },
  { id: 'unsaid', title: 'The Unsaid', type: 'eyes-closed' },
  { id: 'undone', title: 'The Undone', type: 'eyes-closed' },
  { id: 'eulogy', title: 'The Eulogy', type: 'eyes-open-input' },
  { id: 'decision', title: 'Become Reborn', type: 'eyes-closed-then-open' },
]

function App() {
  // currentIndex tracks which phase (0 through 4) we're currently showing
  const [currentIndex, setCurrentIndex] = useState(0)
  // this holds whatever the user types during the Eulogy phase
  const [eulogyText, setEulogyText] = useState('')

  const currentPhase = phases[currentIndex]

  function goNext() {
    if (currentIndex < phases.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function goBack() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>{currentPhase.title}</h1>
      <p>[placeholder content for: {currentPhase.id}]</p>

      {/* Only the Eulogy phase shows a text box, since that's the one
          where the participant types their reflection */}
      {currentPhase.type === 'eyes-open-input' && (
        <textarea
          value={eulogyText}
          onChange={(e) => setEulogyText(e.target.value)}
          placeholder="Write your reflection here..."
          rows={6}
          style={{ width: '80%', marginTop: '1rem' }}
        />
      )}

      <div style={{ marginTop: '2rem' }}>
        {currentIndex > 0 && <button onClick={goBack}>Back</button>}
        {currentIndex < phases.length - 1 && (
          <button onClick={goNext} style={{ marginLeft: '1rem' }}>
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default App