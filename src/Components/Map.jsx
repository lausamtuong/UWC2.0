import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const position = { lat: 40.748817, lng: -73.985428 };

const defaultOptions = {
  scrollwheel: false,
  styles: [
    {
      featureType: "administrative",
      elementType: "labels.text.fill",
      stylers: [{ color: "#444444" }],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [{ color: "#f2f2f2" }],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [{ saturation: -100 }, { lightness: 45 }],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [{ visibility: "simplified" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "water",
      elementType: "all",
      stylers: [{ color: "#4299e1" }, { visibility: "on" }],
    },
  ],
}

const MapExample = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={position}
      defaultOptions={defaultOptions}
    >
      <Marker position={position} />
    </GoogleMap>
  ))
);

export default function Maps() {
  return (
    <>
      <MapExample
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyB31SXCDvnpA-WfDRlTANXenlv4qs6HUc0"
        loadingElement={<div className="h-full" />}
        containerElement={
          <div className="relative w-full rounded h-600-px" />
        }
        mapElement={<div className="rounded h-full" />}
      />
    </>
  );
}