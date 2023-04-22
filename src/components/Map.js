import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer, Marker, Popup, Circle } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngBounds, LayerGroup } from "leaflet";
import { Button } from "primereact/button";
import ModalView from "./Modal";
import { getCoordinates } from "./Utilfunc";

function Map(props) {
  const [coords, setcoords] = useState({ lat: 0, long: 1 });
  useEffect(() => {
    let obj = {};
    getCoordinates().then((position) => {
      obj = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      setcoords(obj);
      console.log(obj);
    });
  }, []);

  const [curDesc, setcurDesc] = useState("");
  const [data, setdata] = useState([
    {
      coords: [45.51, -0.1],
      des: "Data 1",
    },
    {
      coords: [38.51, -0.4],
      des: "Data 2",
    },
    {
      coords: [42.51, -0.78],
      des: "Data 3",
    },
    {
      coords: [55.51, 0.3],
      des: "Data 4",
    },
    { coords: [65.51, -23.14] },
  ]);
  const position = [51.505, -0.09];
  const [modal, setmodal] = useState(false);
  const bounds = new LatLngBounds([45.51, -0.1], [56.51, 1.14]);
  // const bounds1 = new LatLngBounds(
  //   L.latLng(position).subtract(500, 500).toArray(),
  //   L.latLng(position).add(500, 500).toArray()
  // );
  const fillBlueOptions = { fillColor: "blue" };
  const fillRedOptions = { color: "red", fillColor: "red" };
  const greenOptions = { color: "green", fillColor: "green" };
  const purpleOptions = { color: "purple" };

  return (
    <div
      style={{
        padding: "10px",

        // border: "2px dotted black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ModalView
        show={modal}
        onHide={() => setmodal(false)}
        description={curDesc}
      />
      <MapContainer
        center={
          // JSON.parse(localStorage.getItem("user")).coordinates
          //   ? [
          //       JSON.parse(localStorage.getItem("user")).coordinates[0],
          //       JSON.parse(localStorage.getItem("user")).coordinates[1],
          //     ]
          [coords.lat, coords.long]
        }
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "100%", borderRadius: "30px" }}
      >
        <TileLayer url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png" />
        <Circle
          center={[51.51, -0.08]}
          pathOptions={greenOptions}
          radius={200}
        />
        <Circle
          center={[51.51, -0.14]}
          pathOptions={fillRedOptions}
          radius={500}
          stroke={false}
        />
        <Marker
          position={[coords.lat, coords.long]}
          icon={
            new Icon({
              iconUrl: "../images/placeholder-2.png",
              iconSize: [45, 41],
              iconAnchor: [8, 11],
            })
          }
        ></Marker>
        {/* <LayerGroup>

        </LayerGroup> */}
        {data.map((itm) => (
          <Marker
            position={itm.coords}
            icon={
              new Icon({
                iconUrl: props.url,
                iconSize: [45, 41],
                iconAnchor: [8, 11],
              })
            }
          >
            <Popup>
              <div className="">
                <img src="../images/pothole.png" height={150} />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "5px",
                  }}
                >
                  <Button
                    icon="pi pi-info"
                    rounded
                    onClick={() => {
                      setcurDesc(() => itm.des);
                      setmodal(true);
                    }}
                    text
                    severity="success"
                    aria-label="Search"
                  />
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        <Marker
          position={
            JSON.parse(localStorage.getItem("user")).coordinates
              ? [
                  JSON.parse(localStorage.getItem("user")).coordinates[0],
                  JSON.parse(localStorage.getItem("user")).coordinates[1],
                ]
              : position
          }
          icon={
            new Icon({
              iconUrl: props.url,
              iconSize: [45, 41],
              iconAnchor: [8, 11],
            })
          }
        >
          <Popup>
            <div className="">
              <img src="../images/pothole.png" height={150} />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                }}
              >
                <Button
                  icon="pi pi-info"
                  rounded
                  onClick={() => {
                    setmodal(true);
                  }}
                  text
                  severity="success"
                  aria-label="Search"
                />
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

Map.propTypes = {};

export default Map;
