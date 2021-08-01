import './App.css';
import React, {useState} from 'react';
import SideBar from './Componets/SideBar'
import ListingCard from './Componets/ListingCard'
import clickedContext from './Componets/ClickedContex';
import TopHeader from './Componets/TopHeader';

function App() {
  const [clickedCountry, setClickedCountry] = useState('USA');

  const clickHandler = (country) => {
    //console.log(country)
    setClickedCountry(country);
  }
  return (
    <clickedContext.Provider value={clickedCountry}>
    <div className="App">
      <TopHeader/>
      <div className='container'>
      <SideBar click= {clickHandler}/>
      <ListingCard/>
      </div>
    </div>
    </clickedContext.Provider>
  );
}

export default App;
