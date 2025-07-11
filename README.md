# Thinkboard

A collaborative note-taking app built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- Create, view, and manage notes
- Rate limiting to prevent abuse
- Responsive and modern UI

## Tech Stack & Libraries
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Frontend:** React, Vite
- **Styling:** Tailwind CSS, DaisyUI
- **Icons:** Lucide React
- **Other:** Axios, CORS, dotenv

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Development

1. **Install dependencies**
   ```sh
   npm install
   cd backend && npm install
   cd ../frontend && npm install
   ```

2. **Set up environment variables**
   - Copy `.env.example` to `.env` in `backend/` and fill in your MongoDB URI and other secrets.

3. **Run in development mode**
   - Start backend:
     ```sh
     cd backend
     npm run dev
     ```
   - Start frontend:
     ```sh
     cd frontend
     npm run dev
     ```
   - Backend: http://localhost:5001
   - Frontend: http://localhost:5173

### Production Build & Start

1. **Build frontend**
   ```sh
   npm run build
   ```
2. **Start server (serves frontend and API)**
   ```sh
   npm run start
   ```
   - App will be available at Port 5001

## Environment Configuration
- In development, backend and frontend run separately with CORS enabled.
- In production, backend serves the frontend static files.

## Scripts
- `npm run dev` — Start backend and frontend in development mode
- `npm run build` — Build frontend for production
- `npm run start` — Start backend server (serves frontend in production)
