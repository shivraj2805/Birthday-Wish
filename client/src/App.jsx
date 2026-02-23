import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [message, setMessage] = useState('')
  const [showWish, setShowWish] = useState(false)
  const [celebrateMode, setCelebrateMode] = useState(false)
  const [birthdays, setBirthdays] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  // Fetch all birthdays on component mount
  useEffect(() => {
    fetchBirthdays()
  }, [])

  const fetchBirthdays = async () => {
    try {
      const response = await fetch('/api/birthdays')
      const data = await response.json()
      if (data.success) {
        setBirthdays(data.data)
      }
    } catch (error) {
      console.error('Error fetching birthdays:', error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name.trim() && birthDate) {
      setLoading(true)
      try {
        // Save to database
        const response = await fetch('/api/birthdays', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            birthDate,
            message: message.trim() || 'Happy Birthday!',
          }),
        })

        const data = await response.json()
        if (data.success) {
          setShowWish(true)
          setCelebrateMode(true)
          // Refresh the birthdays list
          fetchBirthdays()
        } else {
          alert('Failed to save birthday wish')
        }
      } catch (error) {
        console.error('Error saving birthday:', error)
        alert('Failed to save birthday wish')
      } finally {
        setLoading(false)
      }
    }
  }

  const reset = () => {
    setName('')
    setBirthDate('')
    setMessage('')
    setShowWish(false)
    setCelebrateMode(false)
  }

  const deleteBirthday = async (id) => {
    if (window.confirm('Are you sure you want to delete this birthday wish?')) {
      try {
        const response = await fetch(`/api/birthdays/${id}`, {
          method: 'DELETE',
        })
        const data = await response.json()
        if (data.success) {
          fetchBirthdays()
        }
      } catch (error) {
        console.error('Error deleting birthday:', error)
      }
    }
  }

  return (
    <div className="birthday-container">
      {/* Top Right Icon with Count Badge */}
      <div className="birthday-icon" onClick={() => setShowModal(true)}>
        <span className="icon">🎂</span>
        {birthdays.length > 0 && (
          <span className="badge">{birthdays.length}</span>
        )}
      </div>

      {/* Modal to show all birthdays */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>🎉 All Birthday Wishes ({birthdays.length})</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              {birthdays.length === 0 ? (
                <p className="empty-message">No birthday wishes saved yet!</p>
              ) : (
                <div className="birthday-list">
                  {birthdays.map((birthday) => (
                    <div key={birthday._id} className="birthday-item">
                      <div className="birthday-info">
                        <h3>{birthday.name}</h3>
                        <p className="birth-date">
                          🎂 {new Date(birthday.birthDate).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </p>
                        <p className="birthday-message">{birthday.message}</p>
                      </div>
                      <button 
                        className="delete-btn" 
                        onClick={() => deleteBirthday(birthday._id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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
            <h1 className="title">🎂Enter Birthday Wishes 🎂</h1>
            <p className="subtitle">Enter details to send birthday wishes!</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name..."
                className="name-input"
                autoFocus
                required
              />
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="name-input"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Birthday message (optional)..."
                className="message-input"
                rows="3"
              />
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Saving...' : 'Send Wishes 🎉'}
              </button>
            </form>
          </div>
        ) : (
          <div className="wish-section">
            <h1 className="wish-title animate-bounce">🎉 Happy Birthday! 🎉</h1>
            <h2 className="wish-name">{name}</h2>
            <div className="wish-message">
              <p>{message || '🎂 May your special day be filled with happiness, love, and laughter! 🎂'}</p>
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
