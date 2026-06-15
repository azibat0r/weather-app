#  Weather App

A fullstack weather app built with React, Vite, and Node.js/Express that fetches real-time weather data using the OpenWeatherMap API. The backend server keeps the API key secure and acts as a middleware between the frontend and the weather API.

## Features
- Search weather by city name
- Displays temperature, humidity, wind speed, and feels like
- Press Enter or click Search to fetch data
- Error handling for invalid cities
- API key secured on the backend — never exposed to the client

## Tech Stack
**Frontend:**
- React
- Vite

**Backend:**
- Node.js
- Express.js
- OpenWeatherMap API

## Project Structure
weather-app/

├── src/                  ← React frontend

│   ├── components/

│   │   └── WeatherCard.jsx

│   ├── App.jsx

│   └── App.css

└── weather-backend/      ← Node/Express backend

├── server.js

├── .env              ← not pushed to GitHub

└── package.json


## How to Run

**Backend:**
1. Navigate to the backend folder `cd weather-backend`
2. Run `npm install`
3. Create a `.env` file and add your OpenWeatherMap API key:

    API_KEY=your_api_key_here
   
5. Run `node server.js`
6. Server runs on `http://localhost:3000`

**Frontend:**
1. Open a new terminal and navigate to the root folder
2. Run `npm install`
3. Run `npm run dev`
4. App runs on `http://localhost:5173`
