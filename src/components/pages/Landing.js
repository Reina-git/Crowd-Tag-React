import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { nestedCollections } from "../../mock-data/nestedCollections";
import CollectionUI from "../ui/CollectionUI";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get(
        "https://raw.githubusercontent.com/Reina-git/white-bear-mpa/main/src/mock-data/memory-cards.json"
      )
      .then((res) => {
        // handle success
        console.log(res);
        props.dispatch({
          type: actions.STORE_QUEUED_CARDS,
          payload: res.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  render() {
    return (
      <AppTemplate>
        {nestedCollections.map((collection) => {
          return <CollectionUI collection={collection} key={collection.id} />;
        })}
      </AppTemplate>
    );
  }
}
