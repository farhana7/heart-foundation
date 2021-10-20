import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src={"https://api.time.com/wp-content/uploads/2014/10/tripomatic.png"}
        alt=""
      />
      <Link to="/">
        <button className=" w-full h-12 bg-green-800">Go Back</button>
      </Link>
    </div>
  );
};

export default NotFound;
