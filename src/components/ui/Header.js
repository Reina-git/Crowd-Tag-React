import React from "react";
import Logo from "../../images/noun_shutter_1063959.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="row">
      <div className="col-12 mt-6">
        <Link to="/" className="Logo-link">
          <img src={Logo} className="mt-n2 logo" alt="logo" width="30px" />
          <h1 className="d-inline ml-2 font-family-brand" id="logo-text">
            Crowd Tag
          </h1>
        </Link>
        <div className="float-right mt-2">
          <Link to="/log-in" className="collection-link pr-3">
            Log in
          </Link>
          <Link to="/library-log-in" className="collection-link">
            Library log in
          </Link>
        </div>
      </div>
    </div>
  );
}
