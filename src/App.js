import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalPage from './components/LocalPage.js';
import ParentComponent from './components/ParentComponent.js';
import PropertyList from './Pages/PropertyList.js';
import Listing from './Listing/Listing.js'; 
import Login from "./components/Layout/Login.js";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/ParentComponent" element={<ParentComponent />}/>
          <Route path="/local-page" element={<LocalPage/>}/>
          <Route path="/PropertyList" element={<PropertyList/>}/>
          <Route path="/listing/:name" element={<Listing/>}/> 
          <Route path="/Login" element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
