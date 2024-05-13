import React, { useEffect, useRef } from "react";
// import moment from "moment-timezone";
// import DragSelect from "dragselect";
import { DateTime } from "luxon";
import DragSelect, { DSInputElement } from "dragselect";
import { useDragSelect } from "../hooks/use-drag-select";

function Hour({
  zoneName,
  offset,
  gmt,
  setTime,
}: {
  zoneName: string;
  offset: number;
  gmt: number;
  setTime: (time: string) => void;
}) {
  const inputEl = useRef<HTMLDivElement>(null);
  const ds = useDragSelect();
  //   const getNow = () => {
  //     return parseInt(moment.tz(zoneName).format("HH"));
  //   };
  const getNow = () => {
    return DateTime.local().setZone(zoneName).toFormat("HH");
  };

  const getCurrentTime = () => {
    return DateTime.local().setZone(zoneName).toFormat("HH:mm");
  };

  //   const getToday = () => {
  //     const today = moment.tz(zoneName).format("DD MMM");

  //     return today.split(" ").map((item) => (
  //       <p key={item} className="todayP">
  //         {item}
  //       </p>
  //     ));
  //   };
  const getToday = () => {
    const today = DateTime.local().setZone(zoneName).toFormat("dd MMM");

    return today.split(" ").map((item) => (
      <p key={item} className="todayP">
        {item}
      </p>
    ));
  };

  const getTomorrow = () => {
    const tomorrow = DateTime.local()
      .setZone(zoneName)
      .plus({ days: 1 })
      .toFormat("dd MMM");
    return tomorrow.split(" ").map((item) => (
      <p key={item} className="todayP">
        {item}
      </p>
    ));
  };

  const getClass = (i: number | string) => {
    return `${i === 0 ? "date" : ""} ${i === getNow() ? "today" : ""}`;
  };

  const getDate = (i: number | string) => {
    return i === 0 ? (gmt < 0 ? getTomorrow() : getToday()) : i;
  };

  const getHours = () => {
    let key = 0;
    const hours = [];
    const number = offset < 0 ? 24 + offset : offset;
    for (let i = number; i < 24; i++) {
      hours.push(
        <span key={key++} className={`selectable ${getClass(i)}`}>
          {i === 0 ? getToday() : i}
        </span>
      );
    }
    for (let i = 0; i < number; i++) {
      hours.push(
        <span key={key++} className={`selectable ${getClass(i)}`}>
          {getDate(i)}
        </span>
      );
    }
    return hours;
  };

  // adding a selectable element
  useEffect(() => {
    if (!inputEl.current || !ds) return;
    const elements = inputEl.current.querySelectorAll(
      `.selectable`
    ) as unknown as HTMLElement[];
    ds.addSelectables(elements);
  }, [ds, inputEl]);

  // subscribing to a callback
  useEffect(() => {
    if (!ds) return;
    const id = ds.subscribe("DS:end", (e) => {
      if (inputEl.current === null) {
        return;
      }
      const selected = inputEl.current.querySelectorAll(".ds-selected");
      let time = null;
      const returnZero = function (number: Element) {
        if (number.classList.contains("date")) {
          return "00";
        }
        return number.textContent;
      };
      if (selected.length === 0) {
        time = getCurrentTime();
      } else if (selected.length === 1) {
        time = returnZero(selected[0]) + ":00";
      } else {
        time =
          returnZero(selected[0]) +
          ":00 - " +
          returnZero(selected[selected.length - 1]) +
          ":00";
      }
      setTime(time);
      console.log(e);
    });

    return () => ds.unsubscribe("DS:end", undefined, id!);
  }, [ds]);

  // useEffect(() => {
  //   new DragSelect({
  //     selectables: div.current
  //       ? (div.current.querySelectorAll(`.selectable`) as DSInputElement[])
  //       : ([] as DSInputElement[]),
  //     callback: () => {
  //       if (div.current === null) {
  //         return;
  //       }
  //       let selected = div.current.querySelectorAll(".ds-selected");
  //       let time = null;
  //       const returnZero = function (number) {
  //         if (number.classList.contains("date")) {
  //           return "00";
  //         }
  //         return number.textContent;
  //       };
  //       if (selected.length === 0) {
  //         time = getCurrentTime();
  //       } else if (selected.length === 1) {
  //         time = returnZero(selected[0]) + ":00";
  //       } else {
  //         time =
  //           returnZero(selected[0]) +
  //           ":00 - " +
  //           returnZero(selected[selected.length - 1]) +
  //           ":00";
  //       }
  //       setTime(time);
  //     },
  //   });
  // }, [div]);

  return (
    <div className="hoursList">
      <div className="hoursComp">
        <div className="day" ref={inputEl}>
          {getHours()}
        </div>
      </div>
    </div>
  );
}

export default Hour;
