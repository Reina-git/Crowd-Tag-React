import React from "react";
import AppTemplate from "../ui/AppTemplate";
import BackArrow from "../../icons/icon-arrow-thick-left-circle.svg";
import { Link } from "react-router-dom";
import LeftChevron from "../../icons/icon-cheveron-down.svg";
import RedX from "../../icons/icon-close.svg";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";

export default function Image() {
  return (
    <AppTemplate>
      <div className="row">
        <div className="col mt-6 mb-n2">
          <Link to="/collection" className="collection-link">
            <img src={BackArrow} width="20px" className="mb-1 primary" alt="" />
            Back to collection
          </Link>
        </div>
      </div>
      {/* <!-- Main Image--> */}

      <div className="row">
        <div className="d-flex justify-content-center mt-5">
          <div className="col-2 col-md-1 align-self-center">
            <img
              src={LeftChevron}
              width="100%"
              id="rotate-left"
              alt="left chevron"
            />
          </div>
          <div className="col-8 col-md-10">
            <div>
              <img src={Photo} className="img-fluid" alt="description" />
            </div>
          </div>

          <div className="col-2 col-md-1 align-self-center">
            <img
              src={LeftChevron}
              width="100%"
              id="rotate-right"
              alt="right chevron"
            />
          </div>
        </div>
      </div>
      {/* <!-- Input--> */}
      <div className="row">
        <div className="col-12 mt-5">
          <p className="text-pimary">Please log in to begin tagging photos.</p>
          <Link to="/log-in" className="btn btn-primary">
            Log in
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-12 mt-5">
          <p className="text-primary">Type a tag then press enter.</p>
          <input
            className="form-control form-control-sm mt-3"
            type="text"
            placeholder="Add a tag"
            id="tag-input"
          />
        </div>
      </div>
      <p className="float-right mt-2 mb-0 text-muted">
        <span id="tag-char-count">0</span>/100
      </p>
      <div className="clearfix"></div>
      <div className="row">
        <div className="col-12">
          <div className="d-inline-flex mr-2">
            <p className="tag-text">Elizabeth Cady Stanton</p>
            <Link to="" width="20px" className="collection-link">
              <img src={RedX} width="20px" alt="delete" />
            </Link>
          </div>
          <div className="d-inline-flex mr-2">
            <p className="tag-text">Women's Suffrag</p>
            <Link to="" width="20px" className="collection-link">
              <img src={RedX} width="20px" alt="delete" />
            </Link>
          </div>
          <div className="d-inline-flex">
            <p className="tag-text">United States of America</p>
            <Link to="" width="20px" className="collection-link">
              <img src={RedX} width="20px" alt="delete" />
            </Link>
          </div>

          <div className="d-inline-flex mr-2">
            <p className="tag-text">1900's</p>
            <Link to="" width="20px" className="collection-link">
              <img src={RedX} width="20px" alt="delete" />
            </Link>
          </div>
        </div>
      </div>
    </AppTemplate>
  );
}
