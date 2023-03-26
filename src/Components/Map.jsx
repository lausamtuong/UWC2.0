import { MapContainer, TileLayer, Marker, Popup,Polyline ,LayerGroup,Circle  } from 'react-leaflet'
import CustomMarker from './CustomeMarker'
export default function Maps() {
  const markers = [
    {
      position: [51.505, -0.09],
      content: 'Marker 1',
    },
    {
      position: [51.507, -0.1],
      content: 'Marker 2',
    },
  ];
  const center = [51.505, -0.09]
  const greenOptions = { color: 'green', fillColor: 'green' }
  const positionA = [51.505, -0.09];
  const positionB = [51.51, -0.1];
  const positions = [positionA, positionB];
  const position = [51.505, -0.09]
  return (
    <>
   <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
     <Circle
          center={[51.51, -0.08]}
          pathOptions={greenOptions}
          radius={100}
        />
    <Polyline positions={positions} color="red" smoothFactor={5} />
     {markers.map((marker, idx) => (
        <Marker key={idx} position={marker.position} icon={CustomMarker} >
          <Popup>{marker.content}</Popup>
        </Marker>
      ))}
  </MapContainer>
  </>
  );
}