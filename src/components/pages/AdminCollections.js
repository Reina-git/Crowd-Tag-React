import React from "react";

export default function AdminCollections() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row">
            {/* <!-- top banner--> */}
            <div className="col-12 mt-6">
              <a href="index.html" className="Logo-link">
                <img
                  src="/images/noun_shutter_1063959.svg"
                  className="mt-n2 logo"
                />
                <h1 className="d-inline ml-2 font-family-brand" id="logo-text">
                  Crowd Tag
                </h1>
              </a>
              <div className="float-right mt-2">
                <a href="/library-log-in.html" className="collection-link">
                  Log out
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mt-6 mb-n2">
              <a
                href="/admin-add-photo-collection.html"
                className="collection-link"
              >
                <img
                  src="icons/icon-add.svg"
                  width="20px"
                  className="mb-1 primary"
                />
                Add a new collection
              </a>
            </div>
          </div>
          {/* <!-- <h2 className="font-weight-light mt-4 mb-0">Schlesinger Admin</h2>

        <hr className="mt-2 mb-5" /> --> */}

          {/* <!-- Collection thumbnails--> */}

          <div className="row mt-6">
            <div className="col-12 col-sm-4">
              <div className="img-square">
                <a href="/collection.html">
                  <img
                    src="/images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg"
                    alt="..."
                    className="img-thumbnail thumb-img"
                  />
                </a>
              </div>
            </div>
            <div className="col-6">
              <a
                href="/admin-add-photo-collection.html"
                className="collection-link stretched-link"
              >
                <p className="lead">Suffragists</p>
              </a>
              <p className="text-muted">
                Schlesinger Library on the History of Women in America
              </p>
              <p className="text-muted mt-2">October 1, 2020</p>
            </div>
            <div className="col-6 col-sm-2">
              <a href="" className="remove-link float-right">
                <img
                  className=""
                  src="/icons/icon-trash.svg"
                  alt=""
                  width="20px"
                />
                Remove
              </a>
            </div>
          </div>
          {/* <!-- collection 2--> */}
          <div className="row mt-8">
            <div className="col-12 col-sm-4">
              <div className="img-square">
                <img
                  src="/images/Schlesinger-Library-on-the-History-of-Women-in-America/Tintypes/47849584872_ac61b55a55_o.jpg"
                  alt="..."
                  className="img-thumbnail thumb-img"
                />
              </div>
            </div>
            <div className="col-6">
              <a
                href="/admin-add-photo-collection.html"
                className="lead collection-link stretched-link"
              >
                Tintypes
              </a>
              <p className="text-muted">
                Schlesinger Library on the History of Women in America
              </p>
              <p className="text-muted mt-2">October 1, 2020</p>
            </div>
            <div className="col-6 col-sm-2">
              <a href="" className="remove-link float-right">
                <img
                  className=""
                  src="/icons/icon-trash.svg"
                  alt=""
                  width="20px"
                />
                Remove
              </a>
            </div>
          </div>

          {/* <!-- collection 3--> */}
          <div className="row mt-8">
            <div className="col-12 col-sm-4">
              <div className="img-square">
                <img
                  src="/images/Schlesinger-Library-on-the-History-of-Women-in-America/Harriet-Jane-Hanson-Robinson-and-Harriette-Lucy-Robinson-Shattuck-Papers/27538776703_b28b33b610_o.jpg"
                  alt="..."
                  className="img-thumbnail thumb-img"
                />
              </div>
            </div>

            <div className="col-6 col-sm-6">
              <a
                href="/admin-add-photo-collection.html"
                className="collection-link lead stretched-link"
              >
                Harriet Jane Hanson Robinson and Harriette Lucy Robinson
                Shattuck Papers
              </a>
              <p className="text-muted">
                Schlesinger Library on the History of Women in America
              </p>
              <p className="text-muted mt-2">September 1, 2019</p>
            </div>
            <div className="col-6 col-sm-2">
              <a href="" className="remove-link float-right">
                <img
                  className=""
                  src="/icons/icon-trash.svg"
                  alt=""
                  width="20px"
                />
                Remove
              </a>
            </div>
          </div>
          {/* <!--Collection 4--> */}
        </div>
      </div>
    </div>
  );
}
