import React from "react";
import { Link } from "react-router-dom";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";
// import { nestedCollections } from "../../mock-data/nestedCollections";
// import { users } from "../../mock-data/users";
// const collectionOne = nestedCollections[0];
// const user = users[1];

export default function CollectionUI(props) {
  console.log("the props we passed from the parent component:", props);
  return (
    <div className="row mt-8">
      <div className="col-12 col-sm-4">
        <div className="img-square">
          <Link to="/collection">
            <img
              // src={Photo}
              src={props.collection.photos[0].url}
              alt="..."
              className="img-thumbnail thumb-img"
            />
          </Link>
        </div>
      </div>
      <div className="col-8">
        <Link to="/collection" className="lead collection-link stretched-link">
          {props.collection.name}
        </Link>
        <p className="text-muted">{props.collection.institutionName}</p>
        <p className="text-muted mt-2">{props.collection.createdAt}</p>
      </div>
    </div>
  );
}
