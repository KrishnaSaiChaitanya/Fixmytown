import "./App.css";

import { createContext, useEffect, useState } from "react";
import Tabview from "./components/Mapcomponents/Tabview";
import { getCoordinates, isInCircle } from "./components/Utilfunc";

import Form from "./components/Userpages/Form";
import Admin from "./components/Admin/Admin";
import ZoneSelector from "./components/Mapcomponents/ZoneSelector";
import ZonalAdmin from "./components/ZonalAdmin/ZonalAdmin";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Userpages/Profile";
export const positioncords = createContext();

function App() {
  const [coords, setcoords] = useState({});
  const [pos, setpos] = useState({});
  console.log("this is imp", pos);
  useEffect(() => {
    getCoordinates().then((position) => {
      // console.log([position.coords.latitude, position.coords.longitude]);
      setcoords({
        ...coords,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
      // console.log(coords);
    });
    localStorage.setItem(
      "Zone",
      JSON.stringify({ radius: 100, coords: [26.8057227, 81.0202426] })
    );
    // console.log(
    //   "checking user : ",
    //   isInCircle(
    //     {
    //       center: JSON.parse(localStorage.getItem("Zone")).coords,
    //       radius: JSON.parse(localStorage.getItem("Zone")).radius,
    //     },
    //     { point: coords }
    //   )
    // );
  }, []);

  return (
    <div className="App">
      {/* Render your Components Here  */}
      {/* <positioncords.Provider value={{ pos, setpos }}>
        <ZoneSelector />
        <Form />
      </positioncords.Provider> */}
      {/* <ZonalAdmin /> */}
      {/* <Login /> */}
      <Profile />
      {/* <Register /> */}
      {/* <Tabview /> */}
      {/* <Form /> */}
      {/* <Admin /> */}
      {/* End */}
    </div>
  );
}

export default App;
