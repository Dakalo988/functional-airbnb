import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LocalPage from './components/LocalPage.js';
import ParentComponent from './components/ParentComponent.js';
import PropertyList from './Pages/PropertyList.js';
import Listing from './Listing/Listing.js'; 
import Reserve from './Listing/Reserve.js';
import CreateListing from './components/Admindash/CreateListing.js';
import Viewlist from './components/Admindash/Viewlist.js';
import Login from './components/Layout/Login.js';
import SignUp from './components/Layout/SignUp.js';




const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<ParentComponent />}/>
          <Route path="/local-page" element={<LocalPage/>}/>
          <Route path="/PropertyList" element={<PropertyList/>} />
          <Route path="/listing/:name" element={<Listing/>} /> 
          <Route path="/reserve" element={<Reserve/>} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/Viewlist" element={<Viewlist />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp/>} />
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
