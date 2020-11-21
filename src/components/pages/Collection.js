import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import BackArrow from "../../icons/icon-arrow-thick-left-circle.svg";
import { nestedCollections } from "../../mock-data/nestedCollections";
// console.log(nestedCollections);

import PhotoTumbnail from "../ui/PhotoThumbnail";
const collection = nestedCollections[0];
export default function Collection() {
  return (
    <AppTemplate>
      {/* <!-- collection title--> */}

      <div className="row">
        <div className="col mt-6 mb-0">
          <Link to="/" className="collection-link">
            <img
              src={BackArrow}
              width="20px"
              alt="back arrow"
              className="mb-1 primary"
            />
            Back to collections
          </Link>
        </div>
      </div>
      <h2 className="lead mt-4 mb-0">{collection.name}</h2>

      <hr className="mt-2 mb-5" />

      <div className="row">
        {nestedCollections.map((collection) => {
          if (collection.userId === "ef3d5c68-02c7-4959-864e-9ccafc402228") {
            return (
              <PhotoTumbnail collection={collection} key={collection.id} />
            );
          }
        })}
      </div>
    </AppTemplate>
  );
}
