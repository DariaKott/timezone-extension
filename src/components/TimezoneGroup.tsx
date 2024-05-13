import React, { useState } from "react";
import Timezone from "./Timezone";
import Hour from "./Hour";
import getTimezoneOffset from "../utils/get-timezone-offset";
import { useZones } from "../hooks/use-zones";

function TimezoneGroup({ index }: { index: number }) {
  const [time, setTime] = useState("");
  const { state } = useZones();
  const { zones, defaultOffset, defaultZone } = state;

  // const getGMT = zoneName => {
  //     return moment.tz(zoneName).utcOffset() / 60;
  // };

  // const getOffset = zoneName => {
  //     let displayOffset = defaultOffset - getGMT(zoneName);
  //     let difference =
  //         displayOffset < 1
  //             ? `${displayOffset}`.replace("-", "+")
  //             : "-" + displayOffset;
  //     return parseInt(difference);
  // };

  return (
    <>
      <Timezone
        // zoneName={zones}
        // offset={getOffset(zoneName)}
        time={time}
        // deleteZone={deleteZone}
        index={index}
        // changeDefaultZone={changeDefaultZone}
      />
      <Hour
        zoneName={zones[index]}
        offset={getTimezoneOffset(zones[index], defaultZone)}
        gmt={getTimezoneOffset(zones[index])}
        setTime={setTime}
      />
    </>
  );
}

export default TimezoneGroup;
