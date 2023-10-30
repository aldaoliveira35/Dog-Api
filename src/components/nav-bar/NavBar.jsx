import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <nav>
        <Link className="link" to="/">
          Homepage
        </Link>
        <Link className="link" to="/breeds">
          Breeds
        </Link>
        <Link className="link" to="/upload">
          Upload Picture
        </Link>
      </nav>
    </>
  );
}
