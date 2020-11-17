import React from "react";
import { Link } from "react-router-dom";
import TrashIcon from "../../icons/icon-trash.svg";

export default function AdminPhotoThumbnail(props) {
  console.log("adminPhotoThumbnail", props);
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-5">
      <Link to="/image">
        <div className="img-square">
          <img
            className="img-thumbnail"
            src={props.collection.photos[0].url}
            alt=""
          />
        </div>
      </Link>
      <p className="file-name-text text-break ml-1">
        {props.collection.photos[0].fileName}
      </p>
      <Link to="" className="remove-link tag-text-remove">
        <img className="" src={TrashIcon} alt="" width="15px" />
        Remove
      </Link>
    </div>
  );
}
