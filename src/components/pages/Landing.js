import React from "react";
import AppTemplate from "../ui/AppTemplate";
import { nestedCollections } from "../../mock-data/nestedCollections";
import Collection from "../ui/CollectionUI";
console.log(Collection);
export default function Landing() {
  return (
    <AppTemplate>
      {/* <Collection /> */}
      {nestedCollections.map((collection) => {
        // return <h1>{collection.name}</h1>;
        return <Collection collection={collection} key={collection.id} />;
        // collection.photos.map((photo) => {
        //   return (
        //     <Collection
        //       collection={collection}
        //       photo={photo}
        //       key={collection.id}
        //     />
        //   );
        // });
      })}
    </AppTemplate>
  );
}
