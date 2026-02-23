# 🎂 Birthday Wishes Full-Stack App

A full-stack application for creating and managing birthday wishes with React frontend and Node.js/Express/MongoDB backend.

## 🚀 Quick Start

### Prerequisites
- Node.js installed
- MongoDB Atlas account (free tier works fine)

### 1. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Configure MongoDB
# Edit .env file with your MongoDB Atlas connection string
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>

# Start backend server
npm run dev
```

Backend runs on: **http://localhost:5000**

### 2. Frontend Setup

Open a new terminal:

```bash
# Navigate to client directory
cd client

# Install dependencies (if not already done)
npm install

# Start frontend dev server
npm run dev
```

Frontend runs on: **http://localhost:3000**

## 📱 Features

### Frontend
- ✨ Beautiful animated UI with balloons and confetti
- 📝 Create birthday wishes with name, date, and custom message
- 🎂 Floating icon in top-right corner with count badge
- 📋 Modal to view all saved birthday wishes
- 🗑️ Delete birthday wishes
- 📱 Fully responsive design

### Backend
- 🔌 RESTful API with Express.js
- 🗄️ MongoDB Atlas database integration
- ✅ Input validation with Mongoose
- 🔄 CORS enabled for frontend communication
- 🛡️ Error handling middleware

## 🏗️ Project Structure

```
Sample Project Deloy/
├── client/              # React frontend
│   ├── src/
│   │   ├── App.jsx     # Main component
│   │   ├── App.css     # Styles
│   │   └── main.jsx
│   ├── vite.config.js  # Vite config with proxy
│   └── package.json
│
└── server/              # Node.js backend
    ├── config/
    │   └── db.js       # Database connection
    ├── controllers/
    │   └── birthdayController.js
    ├── models/
    │   └── Birthday.js # Birthday schema
    ├── routes/
    │   └── birthdayRoutes.js
    ├── .env            # Environment variables
    ├── index.js        # Entry point
    └── package.json
```

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/birthdays` | Get all birthday wishes |
| POST | `/api/birthdays` | Create new birthday wish |
| GET | `/api/birthdays/:id` | Get single birthday wish |
| PUT | `/api/birthdays/:id` | Update birthday wish |
| DELETE | `/api/birthdays/:id` | Delete birthday wish |

## 📊 Database Schema

```javascript
{
  name: String,        // Person's name
  birthDate: Date,     // Birth date
  message: String,     // Birthday message
  createdAt: Date,     // Auto-generated
  updatedAt: Date      // Auto-generated
}
```

## 🎯 Usage Guide

1. **Start both servers** (backend on port 5000, frontend on port 3000)
2. **Open browser** to http://localhost:3000
3. **Create a birthday wish**:
   - Enter name
   - Select birth date
   - Add optional custom message
   - Click "Send Wishes 🎉"
4. **View all wishes**:
   - Click the 🎂 icon in top-right corner
   - See list of all saved birthdays
5. **Delete wishes**:
   - Click trash icon (🗑️) next to any wish

## 🛠️ Technologies Used

### Frontend
- React 19
- Vite
- CSS3 with animations
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- dotenv
- cors

## 📝 Environment Variables

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority
NODE_ENV=development
```

## 🤝 Contributing

Feel free to fork and improve this project!

## 📄 License

ISC
