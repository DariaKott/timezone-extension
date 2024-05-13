import React from "react";
import zoneList from "./zones-list";
import { useZones } from "../hooks/use-zones";
import { useSearch } from "../hooks/use-search";
// import * as searchAction from "../module/search";
// import * as cityActions from "../module/city";
// import { connect } from "react-redux";

function SuggestionItem({ value }: { value: string }) {
  const { addZone } = useZones();
  const {
    state: { searchInput },
    setSearchInput,
  } = useSearch();

  const index = value.toLowerCase().indexOf(searchInput.toLowerCase());

  return (
    <li
      className="suggestionItem"
      data-zone={value}
      onClick={() => {
        addZone(zoneList.find((zone) => zone.fullName === value)?.zone || "");
        setSearchInput("");
      }}
    >
      <span className="listTimezone">
        {value.slice(0, index)}
        <span className="highlight">{searchInput}</span>
        {value.slice(index + searchInput.length, value.length)}
      </span>
    </li>
  );
}
export default SuggestionItem;
