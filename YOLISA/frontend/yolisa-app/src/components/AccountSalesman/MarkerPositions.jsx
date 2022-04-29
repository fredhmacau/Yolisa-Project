import React, { useState } from "react";

import { Marker, Popup, useMapEvent } from "react-leaflet";

export default function GetPosition({ positions, url }) {
  const [filterMarkers, setfilterMarkers] = useState([]);
  const markers = [];
  let positionMarkers;

  const map = useMapEvent("click", (e) => {
    map.locate({
      setView: true,
      maxZoom: 18,
      enableHighAccuracy: true,
      watch: true,
      timeout: 5000,
      maximumAge: 0,
    });
    map.flyTo(e.latlng, map.getZoom());
    markers.push(e.latlng);
    positionMarkers = markers.filter((values) => values !== null);
    setfilterMarkers((currentPositon) => [
      ...currentPositon,
      ...positionMarkers,
    ]);
  });
  positions(filterMarkers);

  return (
    <>
      {filterMarkers.map((value, index) => (
        <Marker key={index} position={[value.lat, value.lng]}>
          <Popup>Capabana</Popup>
        </Marker>
      ))}
    </>
  );
}
