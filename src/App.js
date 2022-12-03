import React from 'react';
import './App.css';
import Search from './components/search';
import 'tachyons';

 const App = () =>  {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }


    return (
      <div className="tc">
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
    );
  
}

export default App;
