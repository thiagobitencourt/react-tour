import axios from 'axios';

const API_KEY = 'de4ed12119240cb2f95d4e4b9f3c22c5';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appId=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request: ', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}