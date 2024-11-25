import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const apiKey = import.meta.env.VITE_API_KEY;
    const city = 'New York';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    useEffect(() => {
        async function fetchWeather() {
            try {
                const response = await axios.get(apiUrl);
                setWeather(response.data);
            } catch (err) {
                setError('Could not fetch weather data.', err);
            }
        }

        fetchWeather();
    }, [apiUrl]);

    return (
        <div>
            <h1>Weather Dashboard</h1>
            {error && <p>Error: {error}</p>}
            {weather ? (
                <div>
                    <h2>{ weather.name }</h2>
                    <h4>Tempature: { weather.main.temp }°F</h4>
                    <h4>Weather: { weather.weather[0].description }</h4>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Dashboard;