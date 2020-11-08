import React from "react";

export default function LibraryLogin() {
  return (
    <div class="container">
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
            </div>
          </div>
          {/* 
        <!-- Collection thumbnails--> */}

          {/* <!-- this is the nice to meet you card--> */}
          <div className="row">
            <div className="col-12 col-md-5 mr-md-8">
              <div className="card card-body-padding mt-9 d-flex">
                <h2>Nice to meet you.</h2>
                <p>Sign up for Crowd Tag.</p>
                <button
                  className="btn btn-primary btn-block d-flex justify-content-center mt-5"
                  id="sign-up-button"
                >
                  Sign up
                </button>
                <div id="sign-up-card" style="display: none">
                  <p className="text-primary mt-3">
                    Let's get you tagging some photographs.
                  </p>

                  <p className="text-muted mt-3 lead">Email address</p>

                  <div className="input-group mb-3 mt-2">
                    <input
                      style=""
                      type="text"
                      id="sign-up-email-input"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <p
                    className="text-danger lead mt-2"
                    id="sign-up-email-error"
                  ></p>
                  <p className="text-muted mt-3 lead">Create a password</p>

                  <div className="input-group mb-3 mt-2">
                    <input
                      type="text"
                      className="form-control"
                      id="sign-up-password-input"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </div>
                  <p
                    className="text-danger lead mt-2"
                    id="sign-up-password-error"
                  ></p>
                  <button
                    href="/image.html"
                    className="btn btn-primary btn-block mt-5"
                    id="letsGoButton"
                  >
                    Let's go!
                  </button>
                </div>
              </div>
            </div>

            {/* <!-- this is the welcome back card--> */}

            <div className="col-12 col-md-5 ml-md-7">
              <div class="card card-body-padding mt-9 d-flex">
                <h2>Welcome back</h2>

                <p class="text-muted mt-3 lead">Email address</p>

                <div class="input-group mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="email-input"
                  />
                </div>

                <p class="text-muted mt-3 lead">Password</p>

                <div class="input-group mb-3 mt-2">
                  <input
                    type="text"
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                    id="password-input"
                  />
                </div>

                <a
                  href="/admin-collections.html"
                  class="btn btn-primary mt-5"
                  id="login-button"
                >
                  Login!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
