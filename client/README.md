# Birthday Wishes App - Client

A React frontend for creating and managing birthday wishes with backend integration.

## Features

- 🎂 Create birthday wishes with name, date, and custom message
- 💾 All wishes are saved to MongoDB database
- 🔔 Floating icon in top-right corner shows count of saved wishes
- 📋 Click icon to view all saved birthday wishes
- 🗑️ Delete individual birthday wishes
- 🎉 Beautiful animations and confetti effects
- 📱 Fully responsive design

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Start the Development Server

Make sure the backend server is running on port 5000, then:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## How It Works

### Frontend ↔️ Backend Integration

- **Vite Proxy**: API calls to `/api/*` are proxied to `http://localhost:5000`
- **Fetch Birthdays**: On page load, fetches all saved birthdays from backend
- **Create Birthday**: Form submission saves to database via POST request
- **Delete Birthday**: Click trash icon to remove a birthday wish

### Usage Flow

1. **Create a Wish**:
   - Enter name
   - Select birth date
   - Optionally add a custom message
   - Click "Send Wishes 🎉"

2. **View All Wishes**:
   - Click the 🎂 icon in top-right corner
   - See count badge showing total wishes
   - Modal displays all saved birthdays with details

3. **Delete a Wish**:
   - Open the modal
   - Click trash (🗑️) icon next to any wish
   - Confirm deletion

## Technologies

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Animations and styling
- **Fetch API** - Backend communication

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Endpoints Used

- `GET /api/birthdays` - Fetch all birthday wishes
- `POST /api/birthdays` - Create new birthday wish
- `DELETE /api/birthdays/:id` - Delete a birthday wish

## Project Structure

```
client/
├── src/
│   ├── App.jsx       # Main component with all logic
│   ├── App.css       # Styles and animations
│   ├── main.jsx      # React entry point
│   └── index.css     # Global styles
├── index.html        # HTML template
├── vite.config.js    # Vite configuration with proxy
└── package.json
```
