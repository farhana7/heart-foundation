import React from "react";
import { useParams } from "react-router";

const Taking = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>This is taking service : {serviceId}</h2>
    </div>
  );
};

export default Taking;
