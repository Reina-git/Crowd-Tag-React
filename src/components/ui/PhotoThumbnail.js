import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";

import { nestedCollections } from "../../mock-data/nestedCollections";
const collectionOne = nestedCollections[0];
const photo = collectionOne.photos[0];

export default function PhotoThumbnail(props) {
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-5">
      <Link to="/image">
        <div className="img-square">
          <img
            className="img-thumbnail"
            src={props.collection.photos.url}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}
