import zonesList from "./zones-list";
import { Tooltip as ReactTooltip } from "react-tooltip";
// import DeleteIcon from "./svg/cancel.svg";
// import MakeHomeIcon from "./svg/home.svg";
// import HomeIcon from "./svg/placeholder.svg";
// import DeleteIcon from "./svg/delete-icon";
// import MakeHomeIcon from "./svg/make-home-icon";
// import { ReactComponent as MakeHomeIcon } from "./svg/home.svg";
// import HomeIcon from "./svg/home-icon";
// import { ReactComponent as HomeIcon } from "./svg/placeholder.svg";

import { DateTime } from "luxon";
import getTimezoneOffset from "../utils/get-timezone-offset";
import { Home } from "lucide-react";

import { X } from "lucide-react";
import { useZones } from "../hooks/use-zones";

function Timezone({
  // zoneName,
  // offset,
  time,
  // deleteZone,
  index,
}: // changeDefaultZone,
{
  time: string;
  index: number;
}) {
  const { state, setDefaultZone, removeZone } = useZones();
  const { zones } = state;
  const zoneName = zones[index];
  const offset = getTimezoneOffset(zoneName); // TODO: check if getTimezoneOffset(zoneName, defaultZone);

  //   useEffect(() => {
  //     ReactTooltip.rebuild();
  //   }, []);

  const getCity = () => {
    return zonesList.find((zone) => zone.zone === zoneName)?.city || "";
  };

  const getNow = () => {
    return DateTime.local().setZone(zoneName).toFormat("HH:mm");
  };

  const getToday = () => {
    return DateTime.local().setZone(zoneName).toFormat("EEE, dd MMM");
  };

  const getCountry = () => {
    const country =
      zonesList.find((zone) => zone.zone === zoneName)?.country || "";
    const countryName =
      country.length <= 22 ? country : country.slice(0, 23) + "...";
    return countryName;
  };

  return (
    <div className="timezoneList">
      <div className="timezoneComp">
        <div className="home">
          {+offset === 0 ? (
            <>
              <Home
                className="homeicon icon"
                style={{ width: `13px`, height: `14px` }}
                data-tip
                data-for="place"
              />
              {/* <HomeIcon
                // alt="hometime zone"
                className="homeicon icon"
                style={{ width: `13px`, height: `14px` }}
                data-tip
                data-for="place"
              /> */}
              <ReactTooltip
                id="place"
                place="top"
                // effect="solid"
                // backgroundColor="#743CDE"
              >
                Home
              </ReactTooltip>
            </>
          ) : +offset >= 1 ? (
            "+" + offset
          ) : (
            offset
          )}
          <span className="makeHome">
            {+offset === 0 ? (
              ""
            ) : (
              <div>
                <Home
                  data-tip
                  data-for="house"
                  className="makeHome icon"
                  style={{ width: `13px`, height: `14px` }}
                  onClick={() => setDefaultZone(zoneName)}
                />
                {/* <MakeHomeIcon
                  data-tip
                  data-for="house"
                  className="makeHome icon"
                  style={{ width: `13px`, height: `14px` }}
                  onClick={() =>
                    dispatch({ type: "set_default_zone", payload: zoneName })
                  }
                /> */}
                <ReactTooltip
                  id="house"
                  place="top"
                  //   effect="solid"
                  //   backgroundColor="#743CDE"
                >
                  Change Default timezone
                </ReactTooltip>
              </div>
            )}
          </span>
        </div>
        <div className="timezone">
          <div className="timezone1">
            <span className="cityName homeCity">{getCity()}</span>
            <span className="time homeTime">
              {time === "" ? getNow() : time}
            </span>
          </div>
          <div className="timezone2">
            <span className="countryName homeCode">{getCountry()}</span>
            <span className="date homeDate">{getToday()}</span>
          </div>
        </div>
        <div className="modify">
          <X
            className="remove icon"
            data-tip
            data-for="remove"
            data-city={zoneName}
            style={{ width: `10px`, height: `10px` }}
            onClick={() => {
              removeZone(index);
            }}
          />
          {/* <DeleteIcon
            className="remove icon"
            data-tip
            data-for="remove"
            data-city={zoneName}
            style={{ width: `10px`, height: `10px` }}
            onClick={() => {
              dispatch({ type: "remove_zone", payload: index });
            }}
          /> */}
          <ReactTooltip
            id="remove"
            place="top"
            // effect="solid"
            // backgroundColor="#743CDE"
          >
            Delete
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}

export default Timezone;
