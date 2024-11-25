import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
 
function Dashboard() {
    const [city, setCity] = useState('New York');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;
   

    const fetchWeather = async (searchCity) => {

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=imperial`;

        try {
            setError(null);
            const response = await axios.get(apiUrl);
            setWeather(response.data);
        } catch (err) {
            setWeather(null);
            setError(err.response?.data?.message || 'Could not fetch weather data.');
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(city);
    };



    return (
        <div className="dashboard-container">
            <h1>Weather Dashboard</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                />
                <button
                type="submit"
                >
                Search
                </button>
            </form>
            {error && <p className="error-message">Error: {error}</p>}
            {weather ? (
                <div className="weather-info">
                    <h2>{ weather.name }</h2>
                    <h4>Tempature: { weather.main.temp }°F</h4>
                    <h4>Weather: { weather.weather[0].description }</h4>
                    <h4>Humidity: { weather.main.humidity }%</h4>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
}

export default Dashboard;