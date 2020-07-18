import React, { useState } from "react";
import axios from "axios";
import Context from "../Context";

import Header from "./Header";
import Content from "./Content";
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import DateTime from "./DataTime";
import Error from "./Error";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.city.value;
    if (!location) {
      return setError("ju lutem shkruani emrin e qytetit"), setWeather(null);
    }
    const API_KEY = "58bbb9c7a309e7db0498a451e1281852";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data.main);
    setCity(response.data.name);
    setError(null);

    console.log(response);
    console.log(response.data.wind);
  };
  weather && console.log(weather);

  return (
    <div className="main">
      <Header />
      <Content>
        <DateTime/>
        <Context.Provider
          value={{ api_call: api_call, weather: weather, city: city }}
        >
          <WeatherSearch />
          {weather && <WeatherData />},{error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default Main;
