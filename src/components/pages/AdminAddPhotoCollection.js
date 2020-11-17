import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import EditIcon from "../../icons/icon-edit.svg";
import AddIcon from "../../icons/icon-add.svg";
import { nestedCollections } from "../../mock-data/nestedCollections";
import AdminPhotoThumbnail from "../ui/AdminPhotoThumbnail";

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
        {nestedCollections.map((collection) => {
          if (collection.userId === "ef3d5c68-02c7-4959-864e-9ccafc402228") {
            return (
              <AdminPhotoThumbnail
                collection={collection}
                key={collection.id}
              />
            );
          }
        })}
      </div>
    </AppTemplate>
  );
}
