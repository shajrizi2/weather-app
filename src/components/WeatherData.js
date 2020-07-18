import React, { useContext } from "react";
import Context from "../Context";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, pressure } = weather;

  return (
    <div className="weather-data">
      <p className="weather__tagline">
        Te dhenat e motit per qytetin e{" "}
        <span className="weather-data__city">{city}</span>
      </p>
      <div className="weather-data__box">
        <span className="weather-data__property">
          <p className="weather-data__title">temperatura</p>
          <p className="weather-data__value">{temp}°C</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">lageshtia</p>
          <p className="weather-data__value">{humidity} rh</p>
        </span>
        <span className="weather-data__property">
          <p className="weather-data__title">shtypja</p>
          <p className="weather-data__value">{pressure} P</p>
        </span>
        {/* <span className="weather-data__property">
          <p className="weather-data__title">era</p>
          <p className="weather-data__value">{wind} P</p>
        </span>   */}
      </div>
    </div>
  );
};

export default WeatherData;
