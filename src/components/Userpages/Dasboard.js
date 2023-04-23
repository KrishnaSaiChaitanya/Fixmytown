import React from "react";
import Selector_map from "../Mapcomponents/Selector_map";
import { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import Map from "../Mapcomponents/Map";
import { useEffect } from "react";
import { getCoordinates } from "../Utilfunc";
import { Link } from "react-router-dom";

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
        <div className="col-12 flex align-item-center justify-content-center">
          <Link to="/report">
            <Button label="Report to us" rounded className="w-26rem" />
          </Link>
        </div>
        <div className="col-12 p-5 pb-3">
          <div className="surface-0 text-center pt-3">
            <div className="mb-3 font-bold text-5xl">
              <span className="text-900">One Product, </span>
              <span className="text-blue-600">save future</span>
            </div>
            <div className="text-1xl mb-6">
              Unlock the power of sustainability with our website - learn how to
              save the future, one step at a time
            </div>
            <div className="grid grid-nogutter">
              <div className="col-4 md:col-4 mb-4 px-5">
                <span
                  className="p-3 shadow-2 mb-3 inline-block"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="pi pi-search text-4xl text-blue-500"></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Find</div>
                <span
                  className="text-800 line-height-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Find and report a local waste hotspot and make a difference,Be
                  a part of the solution by identifying neglected waste areas in
                  your community,Your waste location reports will assist in our
                  efforts to clean up and preserve the environment
                </span>
              </div>
              <div className="col-4 md:col-4 mb-4 px-5">
                <span
                  className="p-3 shadow-2 mb-3 inline-block"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="pi pi-image text-4xl text-blue-500"></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Click</div>
                <span className="text-700 line-height-3">
                  Snap a pic of waste and save it on your phone,Help us clean up
                  the planet by uploading your waste photos,Your photo
                  contributions will aid in our efforts to keep our environment
                  clean.
                </span>
              </div>
              <div className="col-4 md:col-4 mb-4 px-5">
                <span
                  className="p-3 shadow-2 mb-3 inline-block"
                  style={{ borderRadius: "10px" }}
                >
                  <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                </span>
                <div className="text-900 text-xl mb-3 font-medium">Report</div>
                <span className="text-700 line-height-3">
                  Upload your waste photo with location details in the form
                  provided,Please include a short description and the exact
                  location of the waste in the image you upload,Your submission
                  will aid in our efforts to clean up and preserve the
                  environment
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
        <div
          className="col-4 flex justify-content-center p-3"
          style={{ border: "1p dotted" }}
        >
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
        <div className="col-12">
          <div className="p-3 pb-2 flex align-item-center justify-content-center">
            <Button label="Apply Filters" rounded className="w-3" outlined />
          </div>
        </div>
        <div className="col-12 p-6 py-3">
          <Map center={coords} url={".../images/placeholder-3.png"} />
        </div>
      </div>
    </div>
  );
}

export default Dasboard;
