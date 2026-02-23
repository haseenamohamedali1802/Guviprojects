import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
} from "react-bootstrap";

import { WeatherIcons } from "../WeatherIcons";


const WeatherInfoIcons = {
  sunset: "/icons/sunset.png",
  sunrise: "/icons/sunrise.png",
  humidity: "/icons/humidity.png",
  wind: "/icons/wind.png",
  pressure: "/icons/pressure.png",
};


const WeatherInfoComponent = ({ name, value, icon }) => {
  return (
    <Col md="auto" className="text-center">
      <Card style={{ width: "10rem" }}>
        <Card.Img
          variant="top"
          src={icon}
          style={{ width: "60px", height: "60px", margin: "auto", marginTop: "10px" }}
        />
        <Card.Body>
          <Card.Title>{value}</Card.Title>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};
function WeatherComponent(props) {
  const { weather } = props;
  const isDay = weather?.weather[0].icon?.includes("d");

  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()}:${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  return (
    <Container className="text-center">
      {/* Temperature + Main Weather */}
      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h2>{`${Math.floor(weather?.main?.temp)}°C | ${weather?.weather[0].description}`}</h2>
        </Col>
        <Col md="auto">
          <img
            src={WeatherIcons[weather?.weather[0].icon]}
            alt="weather icon"
            style={{ width: "100px", height: "100px" }}
          />
        </Col>
      </Row>

      {/* Location */}
      <Row className="justify-content-md-center mb-4">
        <Col md="auto">
          <h3>{`${weather?.name}, ${weather?.sys?.country}`}</h3>
        </Col>
      </Row>

      {/* Weather info */}
      <h4>Weather Info</h4>
      <Row className="justify-content-md-center">
        <WeatherInfoComponent
  icon={WeatherInfoIcons[isDay ? "sunset" : "sunrise"]}
  name={isDay ? "Sunset" : "Sunrise"}
  value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
/>

<WeatherInfoComponent
  icon={WeatherInfoIcons.humidity}
  name="Humidity"
  value={`${weather?.main?.humidity}%`}
/>

<WeatherInfoComponent
  icon={WeatherInfoIcons.wind}
  name="Wind"
  value={`${weather?.wind?.speed} m/s`}
/>

<WeatherInfoComponent
  icon={WeatherInfoIcons.pressure}
  name="Pressure"
  value={`${weather?.main?.pressure} hPa`}
/>

      </Row>
    </Container>
  );
}

export default WeatherComponent;