import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navdash from "../components/Admindash/Navdash";
import "./Reserve.css";
import Filters from "../components/Admindash/Filters";

const Reserve = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accommodationType, nights, total, imageUrl } = location.state || {};

  const handleUpdate = () => {
    alert("Update functionality to be implemented.");

    navigate("/update-path", {
      state: { accommodationType, nights, total, imageUrl },
    });
  };

  const handleDelete = () => {
    alert("Delete functionality to be implemented.");

    navigate("/delete-confirmation");
  };

  return (
    <div className="reserve-container">
      <Navdash />
      <Filters/>
      <h1>Reservation Confirmation</h1>
      <div className="reservation-details">
        <img
          src="https://s3-alpha-sig.figma.com/img/91d6/ccd9/96e5b436aa98cbfacf7fc152380f2a69?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsCGmSkKk8UzH2rrjX~U01ZtdBdr0Wu-iczXliC94AdhK89mjc8CoxcoGfhEPMBPLfWowJLcbvjGQg1LyfTBL7isan4sGAmImP~ZBfxu6GBZI90yc8QShsNkAY8ZrDXFqGhOr-uBm8-fl30ijAo5G2oucYzdB~qsZ0Y-3zFF0N1BRxkfwFc9jRc50Wh-kwYlxNlam8V0GnGhR8GF~KeCHuZN3RcwRouiw18JKuhfTCwCjrRfGCGts3C0Y1Z8gYcn2oAvBPaL3ELhQUcblDZhj~krGZQyi9pIPZOjkAqqChyvtuU9FRPaAo4vgTKwtAQpMxm0l2XeSxH2zMWTmYCqXw__"
          alt={accommodationType}
          className="accommodation-image"
        />
        <div className="accommodation-info">
          <h2>{accommodationType}</h2>
          <p>Nights: {nights}</p>
          <p>Total Amount: ${total}</p>
        </div>
        <div className="buttons-container">
          <button className="update-button" onClick={handleUpdate}>
            Update
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <button className="confirm-button">Confirm Reservation</button>
    </div>
  );
};

export default Reserve;
