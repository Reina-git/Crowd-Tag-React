import React from "react";
import { Link, withRouter } from "react-router-dom";
import TrashIcon from "../../icons/icon-trash.svg";
import { connect } from "react-redux";
import actions from "../../store/actions";

function AdminPhotoThumbnail(props) {
  console.log("adminPhotoThumbnail", props);
  function goToPhoto() {
    console.log("Going to photo");
    props.dispatch({
      type: actions.STORE_SELECTED_PHOTO,
      payload: props.photo,
    });
    props.history.push("/image");
  }
  return (
    <div className="col-lg-3 col-md-4 col-6 mb-5">
      <Link to="/image">
        <div
          className="img-square"
          onClick={() => {
            goToPhoto();
          }}
        >
          <img className="img-thumbnail" src={props.photo.url} alt="" />
        </div>
      </Link>
      <p className="file-name-text text-break ml-1">{props.photo.fileName}</p>
      <Link to="" className="remove-link tag-text-remove">
        <img className="" src={TrashIcon} alt="" width="15px" />
        Remove
      </Link>
    </div>
  );
}

function mapStateToProps(state) {
  return {};
}

export default withRouter(connect(mapStateToProps)(AdminPhotoThumbnail));
