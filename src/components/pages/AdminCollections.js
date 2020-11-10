import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/icon-add.svg";
import TrashIcon from "../../icons/icon-trash.svg";
import Photo from "../../images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg";

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
      {/* <!-- <h2 className="font-weight-light mt-4 mb-0">Schlesinger Admin</h2>

        <hr className="mt-2 mb-5" /> --> */}

      {/* <!-- Collection thumbnails--> */}

      <div className="row mt-6">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <Link to="/collection">
              <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
            </Link>
          </div>
        </div>
        <div className="col-6">
          <Link
            to="/admin-add-photo-collection"
            className="collection-link stretched-link"
          >
            <p className="lead">Suffragists</p>
          </Link>
          <p className="text-muted">
            Schlesinger Library on the History of Women in America
          </p>
          <p className="text-muted mt-2">October 1, 2020</p>
        </div>
        <div className="col-6 col-sm-2">
          <Link to="" className="remove-link float-right">
            <img className="" src={TrashIcon} alt="" width="20px" />
            Remove
          </Link>
        </div>
      </div>
      {/* <!-- collection 2--> */}
      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </div>
        </div>
        <div className="col-6">
          <Link
            to="/admin-add-photo-collection"
            className="lead collection-link stretched-link"
          >
            Tintypes
          </Link>
          <p className="text-muted">
            Schlesinger Library on the History of Women in America
          </p>
          <p className="text-muted mt-2">October 1, 2020</p>
        </div>
        <div className="col-6 col-sm-2">
          <Link to="" className="remove-link float-right">
            <img className="" src={TrashIcon} alt="" width="20px" />
            Remove
          </Link>
        </div>
      </div>

      {/* <!-- collection 3--> */}
      <div className="row mt-8">
        <div className="col-12 col-sm-4">
          <div className="img-square">
            <img src={Photo} alt="..." className="img-thumbnail thumb-img" />
          </div>
        </div>

        <div className="col-6 col-sm-6">
          <Link
            to="/admin-add-photo-collection"
            className="collection-link lead stretched-link"
          >
            Harriet Jane Hanson Robinson and Harriette Lucy Robinson Shattuck
            Papers
          </Link>
          <p className="text-muted">
            Schlesinger Library on the History of Women in America
          </p>
          <p className="text-muted mt-2">September 1, 2019</p>
        </div>
        <div className="col-6 col-sm-2">
          <Link to="" className="remove-link float-right">
            <img className="" src={TrashIcon} alt="" width="20px" />
            Remove
          </Link>
        </div>
      </div>
      {/* <!--Collection 4--> */}
    </AppTemplate>
  );
}
