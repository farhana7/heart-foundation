import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";
// import useFirebase from "../../../hooks/useFirebase";
// import NavLink from "react";

const Header = () => {
  const { user, logout } = useAuth();

  // useFirebase();

  return (
    <>
      <div>
        <div className="sticky top-0 inset-0 h-12 bg-red-700 flex items-center justify-between text-white ">
          <h1 className="text-white font-bold text-5xl">
            National Heart Foundation
          </h1>

          <NavLink as={HashLink} to="/home#home">
            <button>Home</button>
          </NavLink>
          <NavLink as={HashLink} to="/services">
            <button>Services</button>
          </NavLink>
          <NavLink as={HashLink} to="/doctors">
            <button>Doctors</button>
          </NavLink>
          {user?.email ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <NavLink as={HashLink} to="/login">
              <button>Login</button>
            </NavLink>
          )}
          <>
            Signed in as: <a href="/#login">{user?.displayName}</a>
          </>
        </div>
      </div>
    </>
  );
};

export default Header;
