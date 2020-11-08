import React from "react";

export default function Image() {
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
                <a href="/log-in.html" className="collection-link pr-3">
                  Log in
                </a>
                <a href="/library-log-in.html" className="collection-link">
                  Library log in
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col mt-6 mb-n2">
              <a href="/collection.html" className="collection-link">
                <img
                  src="icons/icon-arrow-thick-left-circle.svg"
                  width="20px"
                  className="mb-1 primary"
                />
                Back to collection
              </a>
            </div>
          </div>
          {/* <!-- Main Image--> */}

          <div className="row">
            <div className="d-flex justify-content-center mt-5">
              <div className="col-2 col-md-1 align-self-center">
                <img
                  src="/icons/icon-cheveron-down.svg"
                  width="100%"
                  id="rotate-left"
                />
              </div>
              <div className="col-8 col-md-10">
                <div>
                  <img
                    src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/wrc-pa2-11_50163069872_o.jpg"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="col-2 col-md-1 align-self-center">
                <img
                  src="/icons/icon-cheveron-down.svg"
                  width="100%"
                  id="rotate-right"
                />
              </div>
            </div>
          </div>
          {/* <!-- Input--> */}
          <div className="row">
            <div className="col-12 mt-5">
              <p className="text-pimary">
                Please log in to begin tagging photos.
              </p>
              <a href="/log-in.html" className="btn btn-primary">
                Log in
              </a>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-5">
              <p className="text-primary">Type a tag then press enter.</p>
              <input
                className="form-control form-control-sm mt-3"
                type="text"
                placeholder="Add a tag"
                id="tag-input"
              />
            </div>
          </div>
          <p className="float-right mt-2 mb-0 text-muted">
            <span id="tag-char-count">0</span>/100
          </p>
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-12">
              <div className="d-inline-flex mr-2">
                <p className="tag-text">Elizabeth Cady Stanton</p>
                <a href="" width="20px" className="collection-link">
                  <img src="icons/icon-close.svg" width="20px" />
                </a>
              </div>
              <div className="d-inline-flex mr-2">
                <p className="tag-text">Women's Suffrag</p>
                <a href="" width="20px" className="collection-link">
                  <img src="icons/icon-close.svg" width="20px" />
                </a>
              </div>
              <div className="d-inline-flex">
                <p className="tag-text">United States of America</p>
                <a href="" width="20px" className="collection-link">
                  <img src="icons/icon-close.svg" width="20px" />
                </a>
              </div>

              <div className="d-inline-flex mr-2">
                <p className="tag-text">1900's</p>
                <a href="" width="20px" className="collection-link">
                  <img src="icons/icon-close.svg" width="20px" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
