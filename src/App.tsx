import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
// import TimezoneGroup from "./components/TimezoneGroup";
// import { connect } from "react-redux";
import Toggle from "./components/Toggle";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Theme";
import { GlobalStyles } from "./components/Global";
import TimezoneGroup from "./components/TimezoneGroup";
import { useZones } from "./hooks/use-zones";
import DragSelectProvider from "./context/drag-select-context";

function App() {
  const {
    state: { zones },
  } = useZones();

  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const zoneList = () => {
    return zones.map((_, i) => <TimezoneGroup key={i} index={i} />);
  };
  // Initialize your state using useReducer

  // useEffect(() => {
  //   if (!timeZone) {
  //     setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  //   }
  //   if (!currentOffset) {
  //     setCurrentOffset(new Date().getTimezoneOffset() / 60);
  //   }
  // }, [timeZone, currentOffset]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <DragSelectProvider settings={{ draggability: false }}>
        {/* <DragSelectProvider> */}
        <div className="wrapper">
          <div className="header">
            <div className="title">
              <h1>Time Zone Meeting Planner</h1>
              <p className="sub">Search to add cities & Drag time to convert</p>
            </div>
            <div className="toggle">
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
          <Search />
          {zoneList()}
        </div>
        {/* <Footer /> */}
      </DragSelectProvider>
    </ThemeProvider>
  );
}

export default App;
