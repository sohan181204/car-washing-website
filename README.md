# Dirt2Clea - Car Wash Service Website

A full-stack web application for Dirt2Clea car wash services, built with React (frontend) and Express.js (backend), deployable on Vercel.

## Features

- Responsive React frontend with routing
- Express.js backend with RESTful APIs
- In-memory data storage for bookings, services, and subscriptions
- Email notifications for bookings
- Vercel deployment ready

## Project Structure

- `frontend/` - React application
- `backend/` - Express.js server
- `api/` - Serverless function entry point for Vercel
- `vercel.json` - Vercel deployment configuration

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Set up environment variables (copy `.env.example` to `.env` and fill in values)
4. Start the backend:
   ```bash
   cd backend && npm run dev
   ```
5. Start the frontend:
   ```bash
   cd frontend && npm run dev
   ```

## Deployment on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard:
   - `EMAIL_USER` - Your Gmail address
   - `EMAIL_PASS` - Your Gmail app password
   - `VITE_API_BASE_URL` - Your deployed API URL (e.g., https://your-project.vercel.app/api)
4. Deploy

## API Endpoints

- `POST /api/bookings` - Create a booking
- `GET /api/bookings` - Get all bookings
- `GET /api/services` - Get all services
- `POST /api/services` - Create a service
- `GET /api/subscriptions` - Get all subscriptions
- `POST /api/subscriptions` - Create a subscription

## Technologies Used

- Frontend: React, Vite, Tailwind CSS, Axios
- Backend: Express.js, Nodemailer
- Deployment: Vercel
