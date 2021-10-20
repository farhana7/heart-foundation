import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2 className="text-gray-900 text-4xl font-bold">
          Register: Create Account
        </h2>

        <br />
        <form onSubmit="">
          <input
            className="bg-gray-600 w-44 h-7 "
            type="email"
            name=""
            id=""
            placeholder="Your Email"
          />
          <br />
          <br />
          <input
            className="bg-gray-600 w-44 h-7 "
            type="password"
            name=""
            id=""
            placeholder="Your Password"
          />
          <br />
          <br />
          <input
            className="bg-gray-600 w-44 h-7 "
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <br />

          <input
            className="w-64 h-9 bg-green-900 text-white "
            type="submit"
            value="Submit"
          />
        </form>
        <br />

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <br />

        <div>-------------or-----------</div>
        <br />
        <button className=" w-64 h-12 bg-yellow-300">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
