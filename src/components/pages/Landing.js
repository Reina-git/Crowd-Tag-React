import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { nestedCollections } from "../../mock-data/nestedCollections";
import CollectionUI from "../ui/CollectionUI";

export default function Landing() {
  return (
    <AppTemplate>
      {nestedCollections.map((collection) => {
        return <CollectionUI collection={collection} key={collection.id} />;
      })}
    </AppTemplate>
  );
}
