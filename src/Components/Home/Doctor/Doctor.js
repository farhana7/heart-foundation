import React from "react";

const Doctor = ({ doctor }) => {
  const { name, speciality, img } = doctor;
  return (
    <div className="doctor">
      <img className="doc m-auto" src={img} alt="" width="10%" />
      <h3>{name}</h3>
      <h5 className="text-red-700">{speciality}</h5>
    </div>
  );
};

export default Doctor;
