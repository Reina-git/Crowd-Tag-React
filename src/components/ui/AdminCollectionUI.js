import React from "react";
import { Link } from "react-router-dom";
import TrashIcon from "../../icons/icon-trash.svg";
import toDisplayDate from "date-fns/format";

export default function AdminCollectionUI(props) {
  console.log("AdminCollectionsUI:", props);
  return (
    <div className="row mt-6">
      <div className="col-12 col-sm-4">
        <div className="img-square">
          <Link to="/collection">
            <img
              src={props.collection.photos[0].url}
              alt="..."
              className="img-thumbnail thumb-img"
            />
          </Link>
        </div>
      </div>
      <div className="col-6">
        <Link
          to="/admin-add-photo-collection"
          className="collection-link stretched-link"
        >
          <p className="lead">{props.collection.name}</p>
        </Link>
        <p className="text-muted">{props.collection.institutionName}</p>
        <p className="text-muted mt-2">
          {toDisplayDate(props.collection.createdAt, "MMM. d, yyy")}
        </p>
      </div>
      <div className="col-6 col-sm-2">
        <Link to="" className="remove-link float-right">
          <img className="" src={TrashIcon} alt="" width="20px" />
          Remove
        </Link>
      </div>
    </div>
  );
}
