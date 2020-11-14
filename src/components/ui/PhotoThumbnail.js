import React from "react";
import { Link } from "react-router-dom";
import { nestedCollections } from "../../mock-data/nestedCollections";
const collection = nestedCollections[0];

export default function PhotoThumbnail(props) {
  // console.log("the props we passed from the parent component:", props);
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-5">
      <Link to="/image">
        <div className="img-square">
          <img className="img-thumbnail" src={photo.url} alt="" />
        </div>
      </Link>
    </div>
  );
}
