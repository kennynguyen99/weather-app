import React from 'react';
import {Link, useParams} from 'react-router-dom';

function WeatherReport({ weatherData }) {
    const { city } = useParams();

    // Check if weatherData is null
    if (!weatherData) {
        return <p>Loading weather data...</p>;
    }

    const cityWeather = weatherData[city];



    return (
        <div>
            <Link to={`/`}>
                <h1>Back</h1>
            </Link>

            <h1>Weather Details for {city}</h1>
                <div>
                    <p>Temperature: {cityWeather.main.temp}°C</p>
                    <p>Humidity: {cityWeather.main.humidity}%</p>
                    <p>Pressure: {cityWeather.main.pressure} hPa</p>
                    <p>Wind Speed: {cityWeather.wind.speed} m/s</p>
                    {/* Add more details as needed */}
                </div>
        </div>
    );
}

export default WeatherReport;
