import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';  // Your Spring Boot backend URL

export const getWeather = (city) => {
    return axios.get(`${API_BASE_URL}/weather`, {
        params: { city }
    });
};