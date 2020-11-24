import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import BackArrow from "../../icons/icon-arrow-thick-left-circle.svg";
import { nestedCollections } from "../../mock-data/nestedCollections";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PhotoTumbnail from "../ui/PhotoThumbnail";
// const collection = nestedCollections[0];

function Collection(props) {
  // const mapCollection = props.collection;
  return (
    <AppTemplate>
      {/* <!-- collection title--> */}

      <div className="row">
        <div className="col mt-6 mb-0">
          <Link to="/" className="collection-link">
            <img
              src={BackArrow}
              width="20px"
              alt="back arrow"
              className="mb-1 primary"
            />
            Back to collections
          </Link>
        </div>
      </div>
      <h2 className="lead mt-4 mb-0">{props.collection.name}</h2>

      <hr className="mt-2 mb-5" />
      {/* {console.log("props from collection page", props.collection.photos)} */}
      {/* {console.log("map collection", mapCollection)} */}
      <div className="row">
        {/* <PhotoTumbnail
          collection={props.collection}
          key={props.collection.photos.id}
        /> */}

        {props.collection.photos.map((photo) => {
          return <PhotoTumbnail photo={photo} key={photo.id} />;
        })}
      </div>
    </AppTemplate>
  );
}
function mapStateToProps(state) {
  return {
    collection: state.selectedCollection,
  };
}

export default withRouter(connect(mapStateToProps)(Collection));
