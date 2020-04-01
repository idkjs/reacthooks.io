import React from "react";
import Search from "./Search.js";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
const searchClient = algoliasearch(
  "7KHPPMALBH",
  "3d3f75fcc0407819552f4cd6d1d95abc"
);
export default function Sidebar() {
  return (
    <div className="sidebar">
      <InstantSearch searchClient={searchClient} indexName="hooks">
        <Search />
      </InstantSearch>
    </div>
  );
}
