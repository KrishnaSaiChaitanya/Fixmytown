import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

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
import Dasboard from "./components/Userpages/Dasboard";
import LandingPage from "./Pages/LandingPage";
import Adminlogin from "./Adminlogin";
export const positioncords = createContext();

function App() {
  const [coords, setcoords] = useState({});
  const [pos, setpos] = useState({});
  console.log("this is imp", pos);
  useEffect(() => {
    getCoordinates().then((position) => {
      setcoords({
        ...coords,
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
    localStorage.setItem(
      "Zone",
      JSON.stringify({ radius: 100, coords: [26.8057227, 81.0202426] })
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/dashboard" element={<Dasboard />} />
          <Route path="/zonalAdmin/dashboard" element={<ZonalAdmin />} />
          <Route path="/tabView" element={<Tabview />} />
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route
            path="/user/report"
            element={
              <positioncords.Provider value={{ pos, setpos }}>
                <Form />
              </positioncords.Provider>
            }
          />
          <Route
            path="/zone"
            element={
              <positioncords.Provider value={{ pos, setpos }}>
                <ZoneSelector />
              </positioncords.Provider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
