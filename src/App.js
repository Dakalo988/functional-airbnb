import React from 'react';
import Header from './components/Layout/Header';
import Search from './components/Layout/Search';
import Home from './components/Home';
import Banner from './components/Banner';
import Inspiration from './components/Inspiration';
import Footer from './components/Footer';










const App = () => {
  return (
    <div className="app">
      <Home/>
      <Header />
      <Search/>
     <Banner/>
     <Inspiration/>
     <Footer/>
   
   
      
     
    </div>
  );
};

export default App;


