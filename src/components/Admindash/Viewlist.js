import React from "react";
import Navdash from "./Navdash";
import Filters from "./Filters";
import "./Viewlist.css"; // Import the CSS file

const Viewlist = () => {
  return (
    <>
      <Navdash />
      <Filters />
      <div className="viewlist-container">
        <h1>My Reservations</h1>
        <table className="reservations-table">
          <thead>
            <tr>
              <th>Booked by</th>
              <th>Property</th>
              <th>Checkin</th>
              <th>Checkout</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Johann Coetzee</td>
              <td>Property 1</td>
              <td>19/06/2024</td>
              <td>24/06/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
            <tr>
              <td>Asif Hassam</td>
              <td>Property 2</td>
              <td>19/06/2024</td>
              <td>19/06/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
            <tr>
              <td>Kago Kola</td>
              <td>Property 1</td>
              <td>25/06/2024</td>
              <td>30/06/2024</td>
              <td><button className="btn-delete">Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Viewlist;
