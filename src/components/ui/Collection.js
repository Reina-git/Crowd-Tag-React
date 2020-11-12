import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";
import collections from "../../mock-data/nestedCollections";

export default function Collections(props) {
  return (
    <div className="row mt-8">
      <div className="col-12 col-sm-4">
        <div className="img-square">
          <Link to="/collection">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </Link>
        </div>
      </div>
      <div className="col-8">
        <Link to="/collection" className="lead collection-link stretched-link">
          Suffragists
        </Link>
        <p className="text-muted">{props.name}</p>
        <p className="text-muted mt-2">October 1, 2020</p>
      </div>
    </div>
  );
}
