import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/icon-add.svg";
import { nestedCollections } from "../../mock-data/nestedCollections";
import AdminCollectionUI from "../ui/AdminCollectionUI";

const collection = nestedCollections[0];

export default function AdminCollections() {
  return (
    <AppTemplate>
      <div className="row">
        <div className="col mt-6 mb-n2">
          <Link to="/admin-add-photo-collection" className="collection-link">
            <img src={AddIcon} width="20px" className="mb-1 primary" alt="" />
            Add a new collection
          </Link>
        </div>
      </div>

      <div className="row">
        {nestedCollections.map((collection) => {
          if (collection.userId === "ef3d5c68-02c7-4959-864e-9ccafc402228") {
            return (
              <AdminCollectionUI collection={collection} key={collection.id} />
            );
          }
        })}
      </div>
    </AppTemplate>
  );
}
