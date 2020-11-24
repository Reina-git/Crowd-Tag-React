import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import AddIcon from "../../icons/icon-add.svg";
// import { nestedCollections } from "../../mock-data/nestedCollections";
import AdminCollectionUI from "../ui/AdminCollectionUI";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";

// const collection = nestedCollections[0];

class AdminCollections extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://raw.githubusercontent.com/Reina-git/Crowd-Tag-React/main/src/mock-data/nested-collections.json"
      )
      .then((res) => {
        // handle success
        // console.log("test", res.data);
        props.dispatch({
          type: actions.STORE_ALL_COLLECTIONS,
          payload: res.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  // goToCollection() {
  //   this.props.dispatch({ type: actions.STORE_SELECTED_COLLECTION_INDEX });
  // }

  render() {
    const collection = this.props.allCollections;
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
          {/* 
          
          NEED TO UPDATE THE COLLECTION.USERID WITH THE CURRENT USER.ID
          
          
          */}
          {collection.map((collection) => {
            if (collection.userId === "ef3d5c68-02c7-4959-864e-9ccafc402228") {
              return (
                <AdminCollectionUI
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
}
function mapStateToProps(state) {
  return {
    allCollections: state.allCollections,
  };
}

export default connect(mapStateToProps)(AdminCollections);
