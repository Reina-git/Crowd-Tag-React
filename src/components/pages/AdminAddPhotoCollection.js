import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/icon-edit.svg";
import AddIcon from "../../icons/icon-add.svg";
import TrashIcon from "../../icons/icon-trash.svg";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";

export default function AdminAddPhotoCollection() {
  return (
    <AppTemplate>
      <div className="row">
        <div className="col mt-6 mb-0">
          <Link to="/admin-collections" className="collection-link">
            <img src={EditIcon} width="15px" className="mb-1 primary" alt="" />
            Back to collections
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col mt-4 mb-0">
          <p className="text-primary lead d-inline">Suffragists</p>
          <Link to="">
            <img src={EditIcon} width="15px" className="mb-1" alt="" />
          </Link>

          <button
            className="text-primary btn btn-link float-right"
            id="add-photo-btn"
          >
            <img src={AddIcon} width="20px" className="mb-1 primary" alt="" />
            Add photos
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div id="photo-url" className="d-none">
            <input
              className="form-control form-control-sm mt-3"
              type="text"
              placeholder="Add photo url"
            />
          </div>
        </div>
      </div>
      {/* <!-- Collection Name --> */}
      <hr className="mt-2 mb-5" />
      <div className="row">
        {/* <!--Thumbnail start--> */}
        <div className="col-lg-3 col-md-4 col-6 mb-5">
          <Link to="/image">
            <div className="img-square">
              <img className="img-thumbnail" src={Photo} alt="" />
            </div>
          </Link>
          <p className="file-name-text text-break ml-1">
            a143-3a-17_40944652100_o.jpg
          </p>
          <Link to="" className="remove-link tag-text-remove">
            <img className="" src={TrashIcon} alt="" width="15px" />
            Remove
          </Link>
        </div>
        {/* {/* <!--Thumbnail end-->} */}
      </div>
    </AppTemplate>
  );
}
