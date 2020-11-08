import React from "react";
import Logo from "../../images/noun_shutter_1063959.svg";

export default function Header() {
  return (
    <div className="col-12 mt-6">
      <a href="index.html" className="Logo-link">
        <img src={Logo} className="mt-n2 logo" alt="logo" width="30px" />
        <h1 className="d-inline ml-2 font-family-brand" id="logo-text">
          Crowd Tag
        </h1>
      </a>
      <div className="float-right mt-2">
        <a href="/log-in.html" className="collection-link pr-3">
          Log in
        </a>
        <a href="/library-log-in.html" className="collection-link">
          Library log in
        </a>
      </div>
    </div>
  );
}
