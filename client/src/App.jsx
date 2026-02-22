import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [showWish, setShowWish] = useState(false)
  const [celebrateMode, setCelebrateMode] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) {
      setShowWish(true)
      setCelebrateMode(true)
    }
  }

  const reset = () => {
    setName('')
    setShowWish(false)
    setCelebrateMode(false)
  }

  return (
    <div className="birthday-container">
      {/* Floating Balloons */}
      <div className="balloons">
        <div className="balloon balloon-1">🎈</div>
        <div className="balloon balloon-2">🎈</div>
        <div className="balloon balloon-3">🎈</div>
        <div className="balloon balloon-4">🎈</div>
        <div className="balloon balloon-5">🎈</div>
      </div>

      {/* Confetti */}
      {celebrateMode && (
        <div className="confetti">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="confetti-piece" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`
            }}></div>
          ))}
        </div>
      )}

      <div className="card">
        {!showWish ? (
          <div className="input-section">
            <h1 className="title">🎂 Birthday Wishes 🎂</h1>
            <p className="subtitle">Enter a name to send birthday wishes!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name..."
                className="name-input"
                autoFocus
              />
              <button type="submit" className="submit-btn">
                Send Wishes 🎉
              </button>
            </form>
          </div>
        ) : (
          <div className="wish-section">
            <h1 className="wish-title animate-bounce">🎉 Happy Birthday! 🎉</h1>
            <h2 className="wish-name">{name}</h2>
            <div className="wish-message">
              <p>🎂 May your special day be filled with happiness, love, and laughter! 🎂</p>
              <p>🌟 Wishing you a year full of blessings and unforgettable moments! 🌟</p>
              <p>🎁 May all your dreams and wishes come true! 🎁</p>
              <p>🥳 Have a fantastic birthday celebration! 🥳</p>
            </div>
            <div className="cake">🎂</div>
            <button onClick={reset} className="reset-btn">
              Send Another Wish 💝
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
