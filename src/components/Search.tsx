import React, { useState } from "react";
import zonesList from "./zones-list";
import SuggestionList from "./SuggestionList";
// import { connect } from "react-redux";
// import * as searchAction from "../module/search";
// import SearchIcon from "./svg/search-icon";
import { Search as SearchIcon } from "lucide-react";
// import { useZones } from "../hooks/use-zones";
import { useSearch } from "../hooks/use-search";

function Search() {
  const zonesListNames = zonesList.map((item) => item.fullName);
  const [matchValue, setMatchValue] = useState<string[]>([]);
  // const { addZone } = useZones();
  const {
    setSearchInput,
    state: { searchInput },
  } = useSearch();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    if (e.target.value.length > 0) {
      findMatches(e.target.value);
    }
  };

  const findMatches = (typedWord: string) => {
    const regex = new RegExp(typedWord, "gi");
    const matchArray = zonesListNames
      .filter((zone) => zone.match(regex))
      .slice(0, 10);
    setMatchValue(matchArray);
  };

  return (
    <div className="search">
      <SearchIcon className="searchIcon" style={{ width: `13px` }} />
      <input
        type="text"
        name="searchInput"
        className="searchInput"
        value={searchInput}
        onChange={(e) => inputChange(e)}
        autoComplete="off"
      />
      <input type="submit" name="submit" value="Search" />
      {searchInput && <SuggestionList matchArray={matchValue} />}
    </div>
  );
}

export default Search;
