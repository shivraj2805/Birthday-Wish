# Server - Birthday Wishes API

A Node.js/Express backend with MongoDB Atlas for managing birthday wishes.

## Features

- Express.js server
- MongoDB Atlas database connection
- RESTful API endpoints for birthday wishes
- CORS enabled
- Environment variables configuration
- Error handling middleware
- Birthday CRUD operations

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure MongoDB Atlas

1. Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Get your connection string
4. Update the `.env` file with your MongoDB connection string

### 3. Environment Variables

Copy `.env.example` to `.env` and update the following:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<database>?retryWrites=true&w=majority
NODE_ENV=development
```

Replace:
- `<username>` with your MongoDB Atlas username
- `<password>` with your MongoDB Atlas password
- `<database>` with your database name

### 4. Run the Server

**Development mode** (with auto-restart):
```bash
npm run dev
```

**Production mode**:
```bash
npm start
```

## API Endpoints

### Birthday Wishes

- `GET /api/birthdays` - Get all birthday wishes (sorted by birth date)
- `GET /api/birthdays/:id` - Get single birthday wish
- `POST /api/birthdays` - Create new birthday wish
- `PUT /api/birthdays/:id` - Update birthday wish
- `DELETE /api/birthdays/:id` - Delete birthday wish

### Example Request

**Create Birthday Wish:**
```json
POST /api/birthdays
{
  "name": "John Doe",
  "birthDate": "1990-05-15",
  "message": "Wishing you a wonderful birthday!"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "name": "John Doe",
    "birthDate": "1990-05-15T00:00:00.000Z",
    "message": "Wishing you a wonderful birthday!",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

## Project Structure

```
server/
├── config/
│   └── db.js                    # Database connection
├── controllers/
│   └── birthdayController.js    # Birthday logic
├── models/
│   └── Birthday.js              # Birthday model/schema
├── routes/
│   └── birthdayRoutes.js        # Birthday routes
├── .env                         # Environment variables (not in git)
├── .env.example                 # Environment variables template
├── .gitignore
├── index.js                     # Entry point
└── package.json
```

## Technologies Used

- **Express.js** - Web framework
- **MongoDB Atlas** - Cloud database
- **Mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **cors** - Cross-origin resource sharing
- **nodemon** - Development auto-restart

## Frontend Integration

The backend is designed to work with a frontend that:
1. Shows an icon in the top right corner with a count of birthday wishes
2. Clicking the icon displays all stored birthday wishes
3. Allows creating new birthday wishes through a form

Use the GET `/api/birthdays` endpoint to fetch all names and display them in your frontend.
