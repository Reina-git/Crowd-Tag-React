import actions from "../actions";

export default function selectedTag(tag = {}, action) {
  switch (action.type) {
    case actions.STORE_SELECTED_TAG:
      return action.payload;
    default:
      return tag;
  }
}
