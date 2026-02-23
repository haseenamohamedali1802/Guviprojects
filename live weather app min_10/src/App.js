import React, { useState } from 'react';
import Axios from 'axios';
import { Container } from 'react-bootstrap';
import WeatherComponent from './components/WeatherComponent';
import CityComponent from './components/CityComponent';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function App() {
  const [city, updateCity] = useState('');
  const [weather, updateWeather] = useState();
  const [error, setError] = useState("");

  const fetchWeather = async (e) => {
    e.preventDefault();
    const APIKEY = 'f6bbfc0047d6e17b3683578cd54140e5';

    try {
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
      );
      updateWeather(response.data);
      setError("");
    } catch (err) {
      setError("Error fetching weather data. Please enter a valid city.");
    }
  };

  return (
    <Container className='mt-5'>
      <h1 className='text-center'>Weather App</h1>

      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}

      {/* Error popup */}
      <Modal show={!!error} onHide={() => setError("")}>
        <Modal.Header closeButton>
          <Modal.Title>⚠ Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setError("")}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
