import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './weatherReport.css'; // Import styles specific to WeatherReport

function WeatherReport({ weatherData }) {
    const { city } = useParams();

    // Check if weatherData is null
    if (!weatherData) {
        return <p>Loading weather data...</p>;
    }

    const { main, weather, name } = weatherData[city];
    const { temp, temp_max, temp_min } = main;
    const { description, icon } = weather[0];

    const backgroundClass = getBackgroundClass(description);
    // console.log('Background Class:', backgroundClass);

    return (
        <div>

            <div className={`weather-container ${backgroundClass}`}>
                <Link to={`/`} className="back-link">
                    <h1>Back</h1>
                </Link>
                <div className="weather-info">
                    <h1 className="city-name">{name} Weather Report</h1>
                    <div className="weather-details">
                        <img
                            src={`http://openweathermap.org/img/wn/${icon}.png`}
                            alt={description}
                            className="weather-icon"
                        />
                        <h2 className="temperature">{Math.round(temp - 273.15)}°C</h2>
                        <p className="description">{description}</p>
                        <p className="high-low">
                            {/* convert to celcius */}
                            High: {Math.round(temp_max - 273.15)}°C | Low: {Math.round(temp_min - 273.15)}°C
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const getBackgroundClass = (description) => {
    if (description.includes('clear')) return 'sunny';
    if (description.includes('cloud')) return 'cloudy';
    if (description.includes('rain')) return 'rainy';
    if (description.includes('snow')) return 'snowy';
    return 'default';
};

export default WeatherReport;
