import logo from './logo.svg';

// Import weather icon
import cloudySunIcon from './assets/cloudy-sun-icon.png';
import './App.css';
// import weather utils functions
import { fetchWeatherForCities } from './weatherUtils';
// import to do api calls to backend
import React, { useEffect, useState } from 'react';
//import React Router
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import React Components
import WeatherReport from './components/weatherReport';
import HomePage from "./components/home";

// Example image paths. Replace these with actual paths to your weather icons.
const weatherCities = {
    Vancouver: cloudySunIcon,
    Montreal: cloudySunIcon,
    Seattle: cloudySunIcon,
    "New York": cloudySunIcon,
    Beijing: cloudySunIcon,
    Tokyo: cloudySunIcon,
    Manila: cloudySunIcon,
    "Ho Chi Minh City": cloudySunIcon,
    Shanghai: cloudySunIcon,
    Dubai: cloudySunIcon,
    Nunavut: cloudySunIcon
};



function App() {
    // State hooks used by React
    // city is a state variable that holds the current value of the city input by the user.
    // It is initialized with an empty string ('').
    // setCity is a function that is used to update the city state variable. When called with
    // a new value, React schedules a re-render of the component to reflect the updated value
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch weather data initially
        const cities = Object.keys(weatherCities);

        // Set up interval to fetch data periodically (e.g., every 1 minutes)
        const intervalId = setInterval(() => {
            fetchWeatherForCities(cities, setWeatherData, setError);
        }, 2 * 1000); // 6 seconds
        console.log("Printing weatherData: \n");
        console.log(JSON.stringify(weatherData, null, 2));
        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs once on mount


    // render JSX
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Weather Forecast</h1>
                </header>

                {error && <div className="error">{error}</div>}

                <Routes>
                    <Route path="/" element={<HomePage
                                weatherData={weatherData}
                                weatherCities={weatherCities}
                                /> }
                    />
                    <Route path="/weather/:city" element={<WeatherReport weatherData={weatherData} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
