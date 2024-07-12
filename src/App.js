import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalPage from './components/LocalPage.js';
import ParentComponent from './components/ParentComponent.js';
import PropertyList from './Pages/PropertyList.js';
import Listing from './Listing/Listing.js'; // Make sure to import Listing component

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<ParentComponent />}/>
          <Route path="/local-page" element={<LocalPage/>}/>
          <Route path="/PropertyList" element={<PropertyList/>}/>
          <Route path="/listing/:name" element={<Listing/>}/> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;
