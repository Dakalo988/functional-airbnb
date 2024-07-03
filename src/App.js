import React from 'react';
import Header from './components/Layout/Header';
import Search from './components/Layout/Search';
import Home from './components/Home';
import Banner from './components/Banner';
import Cards from './components/Cards';








const App = () => {
  return (
    <div className="app">
      <Home/>
      <Header />
      <Search/>
     <Banner/>
     <Cards/>
      
     
    </div>
  );
};

export default App;


