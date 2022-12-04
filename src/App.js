import React, { useState } from 'react';
import './App.css';
import Search from './components/search';
import 'tachyons';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
 const App = () =>  {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [latitude, longitude] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&&units=metric`);
    const currentForecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&&units=metric`);

    Promise.all([currentWeatherFetch, currentForecastFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city: searchData.label, ...weatherResponse});
      setForecastWeather({city: searchData.label, ...forecastResponse});
    }).catch((err) => console.log(err));
  }

    return (
      <div className="">
        <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
      </div>
    );
  
}

export default App;
