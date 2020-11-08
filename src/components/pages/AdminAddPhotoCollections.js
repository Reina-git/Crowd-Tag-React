import React from "react";
import Header from "../ui/Header";

export default function AdminAddPhotoCollection() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row">
            {/* <!-- top banner--> */}
            <div className="col-12 mt-6">
              <Header />
            </div>
            <div className="row">
              <div className="col mt-6 mb-0">
                <a href="/admin-collections.html" className="collection-link">
                  <img
                    src="icons/icon-arrow-thick-left-circle.svg"
                    width="20px"
                    className="mb-1 primary"
                  />
                  Back to collections
                </a>
              </div>
            </div>

            <div className="row">
              <div className="col mt-4 mb-0">
                <p className="text-primary lead d-inline">Suffragists</p>
                <a href="">
                  <img
                    src="icons/icon-edit.svg"
                    width="15px"
                    className="mb-1"
                  />
                </a>

                <button
                  className="text-primary btn btn-link float-right"
                  id="add-photo-btn"
                >
                  <img
                    src="icons/icon-add.svg"
                    width="20px"
                    className="mb-1 primary"
                  />
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
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-17_40944652100_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  a143-3a-17_40944652100_o.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a143-3a-18_40944654580_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  aksdjfh;aksdhj-akjdhflkajhdf-.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}

              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a68-334-1_48576284497_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/aw378-1-18_42942330461_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a33-2v-39_48051603162_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  textbreakthisisthelongestnameicanthinkofiwonderwhatwillhappen
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a68-369-5_48087245932_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/aw378-1-24_29202425088_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/mc399-251-37_48959448431_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a68-369-2_48051487291_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a77-115-7_48545571316_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/a77-117-1_45928417595_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/mc377-1-1_48087165113_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
              {/* <!--Thumbnail end-->
           <!--Thumbnail start--> */}
              <div className="col-lg-3 col-md-4 col-6 mb-5">
                <a href="/image.html">
                  <div className="img-square">
                    <img
                      className="img-thumbnail"
                      src="images/Schlesinger-Library-on-the-History-of-Women-in-America/Suffragists/mc377-1-2_28963093428_o.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <p className="file-name-text text-break ml-1">
                  filename-2020.jpg
                </p>
                <a href="" className="remove-link tag-text-remove">
                  <img
                    className=""
                    src="/icons/icon-trash.svg"
                    alt=""
                    width="15px"
                  />
                  Remove
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
