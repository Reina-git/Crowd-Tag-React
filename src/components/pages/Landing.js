import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";

export default function Landing() {
  return (
    <AppTemplate>
      {/* <!-- Collection thumbnails--> */}

      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <Link to="/collection">
              <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
            </Link>
          </div>
        </div>
        <div className="col-8">
          <Link
            to="/collection"
            className="lead collection-link stretched-link"
          >
            Suffragists
          </Link>
          <p className="text-muted">
            Schlesinger Library on th History of Women in America
          </p>
          <p className="text-muted mt-2">October 1, 2020</p>
        </div>
      </div>
      {/* <!-- collection 2--> */}
      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </div>
        </div>
        <div className="col-8">
          <Link
            to="/collection"
            className="lead collection-link stretched-link"
          >
            Tintypes
          </Link>
          <p className="text-muted">
            Schlesinger Library on th History of Women in America
          </p>
          <p className="text-muted mt-2">October 1, 2020</p>
        </div>
      </div>

      {/* <!-- collection 3--> */}
      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </div>
        </div>
        <div className="col-8">
          <Link
            to="/collection"
            className="lead collection-link stretched-link"
          >
            Harriet Jane Hanson Robinson and Harriette Lucy Robinson Shattuck
            Papers
          </Link>
          <p className="text-muted">
            Schlesinger Library on th History of Women in America
          </p>
          <p className="text-muted mt-2">September 1, 2019</p>
        </div>
      </div>
      {/* <!--Collection 4--> */}
      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </div>
        </div>
        <div className="col-8">
          <Link to="/collection" className="lead collection-link">
            Historical Photographs
          </Link>
          <p className="text-muted">Vancouver Public Library</p>
          <p className="text-muted mt-2">September 1, 2019</p>
        </div>
      </div>
    </AppTemplate>
  );
}
