import React from 'react';
import './App.css';
import Search from './components/search';
import 'tachyons';
import CurrentWeather from './components/current-weather/current-weather';
 const App = () =>  {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }


    return (
      <div className="">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather />
      </div>
    );
  
}

export default App;
