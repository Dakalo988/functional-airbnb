import React from 'react';
import { useNavigate } from 'react-router-dom';
import Search from './Layout/Search';
import Header from './Layout/Header';
import Home from './Home';
import Inspiration from './Inspiration';
import Footer from './Footer';
import Banner from './Banner';

const ParentComponent = () => {
  const navigate = useNavigate();

  const handleLocationSelect = (location) => {
    if (location === 'local') {
      navigate('/local-page'); // Navigate to the desired route
    }
  };

  console.log('ParentComponent rendering, handleLocationSelect:', handleLocationSelect);

  return (

    <div>
      <Home/>
      <Header/>
      <Search onLocationSelect={handleLocationSelect} />
      <Banner/>
      <Inspiration/>
      <Footer/>
     
    </div>
    
  );
};

export default ParentComponent;
