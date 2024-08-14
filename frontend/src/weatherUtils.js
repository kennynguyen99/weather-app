import axios from 'axios';

// Define the function to fetch weather data for multiple cities
export function fetchWeatherForCities(cities, setWeatherData, setError) {
    const promises = cities.map(
        city => {

            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8080/weather', {
                    params: {city}
                }).then(response => {
                    resolve({city, data: response.data});
                }).catch(err => {
                    reject(err);
                })
            });
        }
    );

    Promise.all(promises)
        .then(results => {
            // reduce takes in an anon function on how to accumulate each element into the accumulator
            // {} is the value the accumulator starts with
            const data = results.reduce(
                (acc, { city, data }) => {
                acc[city] = data;
                return acc;
                }, {}
            );
            setWeatherData(data);
            setError(null);
        })
        .catch(err => {
            setError('Error fetching weather data: ' + err.message);
            setWeatherData({});
        });
}