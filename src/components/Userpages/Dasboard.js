import React from "react";
import Selector_map from "../Mapcomponents/Selector_map";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import Map from "../Mapcomponents/Map";
import { useEffect } from "react";
import { getCoordinates } from "../Utilfunc";

function Dasboard() {
  const [coords, setcoords] = useState({
    lat: 26.8057227,
    long: 81.0245123,
  });
  useEffect(() => {
    let obj = {};
    getCoordinates().then((position) => {
      obj = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      console.log("onnhuhy", obj);
      setcoords({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);
  console.log("from dashboard", coords);
  const [option, setoption] = useState(null);
  const cities = [
    { name: "Litter issues", code: "litter" },
    { name: "Sewage issues", code: "sewage" },
    { name: "Pothole issues", code: "pothole" },
  ];
  return (
    <div>
      <div className="grid grid-nogutter">
        <div className="col-12 flex justify-content-center">
          <img src="../images/dashboard.jpg" height={400} />
        </div>
        <div className="col-12 " style={{ paddingInline: "150px" }}>
          <p className="text-center flex justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
            at! Quam nam quae incidunt aspernatur animi quibusdam, magni
            veritatis dolorem ipsum minima ut molestiae doloribus amet suscipit
            unde, maxime necessitatibus?
          </p>
        </div>
        <div className="col-4"></div>
        <div className="col-4 flex justify-content-center p-3">
          <Dropdown
            value={option}
            onChange={(e) => setoption(e.value)}
            options={cities}
            optionLabel="name"
            placeholder="Select a City"
            className="w-full md:w-14rem"
          />
        </div>
        <div className="col-4"></div>
        <div className="col-12 flex align-item-center justify-content-center">
          <div className="p-3 pb-2 ">
            <Button label="Apply Filters" rounded className="w-3" outlined />
          </div>
        </div>
        <div className="col-12 p-6 py-3">
          <Map center={coords} url={".../images/placeholder-3.png"} />
        </div>
        <div className="col-12 flex align-item-center justify-content-center">
          <Button label="Apply Filters" rounded className="w-3" outlined />
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
