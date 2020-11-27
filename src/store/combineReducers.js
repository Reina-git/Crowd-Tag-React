import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import allCollections from "./reducers/allCollections";
import selectedCollection from "./reducers/selectedCollection";
import selectedPhoto from "./reducers/selectedPhoto";
import selectedTag from "./reducers/selectedTag";

export default combineReducers({
  currentUser,
  allCollections,
  selectedCollection,
  selectedPhoto,
  selectedTag,
});
