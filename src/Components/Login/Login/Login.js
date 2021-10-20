import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Login.css";

const Login = () => {
  const { singInUsingGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    singInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div className="login-form">
      <div>
        <h2 className="text-gray-900 text-4xl font-bold">Login</h2>
        <br />
        <br />
        <form>
          <input
            className="bg-gray-600 w-44 h-7 "
            type="email"
            name=""
            id=""
            placeholder="Your Email"
          />
          <br />
          <input type="password" name="" id="" />
          <br />

          <input
            className="w-64 h-9 bg-green-900 text-white "
            type="submit"
            value="Submit"
          />
        </form>
        <br />

        <p>
          new to heart-foundation ? <Link to="/register">Create Account</Link>
        </p>
        <br />
        <div>---------------or------------------</div>
        <button
          className=" w-64 h-12 bg-yellow-300"
          onClick={handleGoogleLogin}
        >
          Google Sing In
        </button>
        <br />
        <br />
        <br />

        <img
          className="w-full"
          src={
            "https://domf5oio6qrcr.cloudfront.net/medialibrary/6222/78151dd1-305e-4c48-920c-78b449ee2d87.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
