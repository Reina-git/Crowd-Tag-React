import React from "react";
import Header from "../ui/Header";

export default function Landing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
          <div className="row">
            {/* <!-- top banner--> */}
            <Header />

            {/* <!-- Collection thumbnails--> */}

            <div className="row mt-8">
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
              <div className="col-8">
                <a
                  href="/collection.html"
                  className="lead collection-link stretched-link"
                >
                  Suffragists
                </a>
                <p className="text-muted">
                  Schlesinger Library on th History of Women in America
                </p>
                <p className="text-muted mt-2">October 1, 2020</p>
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
              <div className="col-8">
                <a
                  href="/collection.html"
                  className="lead collection-link stretched-link"
                >
                  Tintypes
                </a>
                <p className="text-muted">
                  Schlesinger Library on th History of Women in America
                </p>
                <p className="text-muted mt-2">October 1, 2020</p>
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
              <div className="col-8">
                <a
                  href="/collection.html"
                  className="lead collection-link stretched-link"
                >
                  Harriet Jane Hanson Robinson and Harriette Lucy Robinson
                  Shattuck Papers
                </a>
                <p className="text-muted">
                  Schlesinger Library on th History of Women in America
                </p>
                <p className="text-muted mt-2">September 1, 2019</p>
              </div>
            </div>
            {/* <!--Collection 4--> */}
            <div className="row mt-8">
              <div className="col-12 col-sm-4">
                <div className="img-square">
                  <img
                    src="/images/Vancouver-Public-Library/30865551856_7b62046f82_o.jpg"
                    alt="..."
                    className="img-thumbnail thumb-img"
                  />
                </div>
              </div>
              <div className="col-8">
                <a href="/collection.html" className="lead collection-link">
                  Historical Photographs
                </a>
                <p className="text-muted">Vancouver Public Library</p>
                <p className="text-muted mt-2">September 1, 2019</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
