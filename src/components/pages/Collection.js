import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";
import BackArrow from "../../icons/icon-arrow-thick-left-circle.svg";

export default function Collection() {
  return (
    <AppTemplate>
      {/* <!-- collection title--> */}

      <div className="row">
        <div className="col mt-6 mb-0">
          <Link to="/" className="collection-link">
            <img src={BackArrow} width="20px" className="mb-1 primary" />
            Back to collections
          </Link>
        </div>
      </div>
      <h2 className="lead mt-4 mb-0">Suffragists</h2>

      <hr className="mt-2 mb-5" />

      <div className="row">
        {/* <!--Thumbnail start--> */}
        <div className="col-lg-3 col-md-4 col-6 mb-5">
          <Link to="/image">
            <div className="img-square">
              <img className="img-thumbnail" src={Photo} alt="" />
            </div>
          </Link>
        </div>
        {/* <!--Thumbnail end--> */}
        {/* <!--Thumbnail start--> */}
        <div className="col-lg-3 col-md-4 col-6 mb-5">
          <Link to="/image">
            <div className="img-square">
              <img className="img-thumbnail" src={Photo} alt="" />
            </div>
          </Link>
        </div>
        {/* <!--Thumbnail end--> */}
        {/* <!--Thumbnail start--> */}
        <div className="col-lg-3 col-md-4 col-6 mb-5">
          <Link to="/image">
            <div className="img-square">
              <img className="img-thumbnail" src={Photo} alt="" />
            </div>
          </Link>
        </div>
        {/* <!--Thumbnail end--> */}
        {/* <!--Thumbnail start--> */}
        <div className="col-lg-3 col-md-4 col-6 mb-5">
          <Link to="/image">
            <div className="img-square">
              <img className="img-thumbnail" src={Photo} alt="" />
            </div>
          </Link>
        </div>
        {/* <!--Thumbnail end--> */}
      </div>
    </AppTemplate>
  );
}