import React from 'react';
import {Link, useParams} from 'react-router-dom';

function HomePage({weatherData, weatherCities}) {
    // Check if weatherData is null
    if (!weatherCities || !weatherData) {
        return <p>Loading weather data...</p>;
    }
    return (
        <div className="weather-container">
        {
            Object.keys(weatherCities).map(city => (
                <div className="weather-card" key={city}>
                    <Link to={`/weather/${city}`}>
                        <img
                            src={weatherCities[city]}
                            alt={`Weather icon for ${city}`}

                            className="weather-icon"
                        />
                        <h2>{city}</h2>
                        {weatherData && weatherData[city] && weatherData[city].main && (
                            <p>{weatherData[city].main.temp}°C</p>
                        )}
                    </Link>
                </div>
                )
            )
        }
    </div>)
}

export default HomePage;