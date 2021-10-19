import React from "react";

const Doctor = ({ doctor }) => {
  const { name, speciality, img } = doctor;
  return (
    <div className="col-lg-4 col-sm-6 col-12">
      {/*bootstrap*/}
      <img className="doc m-auto" src={img} alt="" width="10%" />
      <h3>{name}</h3>
      <h5 className="text-red-700">{speciality}</h5>
    </div>
  );
};

export default Doctor;
