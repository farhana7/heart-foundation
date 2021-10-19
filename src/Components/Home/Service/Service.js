import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  // const {service} = props;
  const { id, name, description, img } = service;
  return (
    <div className="service pb-3">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p className="px-3">{description}</p> {/* bootstrap*/}
      <Link to={`/taking/${id}`}>
        <button className="w-32 h-7 bg-gray-700" to="/service">
          Take {name.toLowerCase()} service
        </button>
      </Link>
      {/* <NavLink className="w-32 h-7 bg-gray-700" to="/service">
        Take {name.toLowerCase()} service
      </NavLink> */}
    </div>
  );
};

export default Service;
