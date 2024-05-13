import React from "react";
import SuggestionItem from "./SuggestionItem";
import { JSX } from "react/jsx-runtime";

function SuggestionList({
  matchArray,
}: // value,
// addZone,
{
  matchArray: string[];
  // value: string;
  // addZone: (city: string) => void;
}) {
  let list: JSX.Element[] = [];

  if (matchArray && matchArray.length > 0) {
    list = matchArray.map((value, i) => {
      return (
        // <SuggestionItem data={data} key={i} value={value} addZone={addZone} />
        <SuggestionItem value={value} key={i} />
      );
    });
  }

  return <ul className="suggestionList">{list}</ul>;
}

export default SuggestionList;
