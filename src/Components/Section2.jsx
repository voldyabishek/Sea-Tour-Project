// In your Section2.js file
import markerIconUrl from 'leaflet/dist/images/marker-icon.png'; // Correctly import the icon

const Section2 = () => {
  return (
    <div className="interactive-map">
      <h2>Explore Our Sea Tour Destinations</h2>
      <MapContainer center={[18.4669, -66.1183]} zoom={5} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={location.coords}
            icon={new L.Icon({
              iconUrl: markerIconUrl, // Use the imported marker icon URL
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })}
          >
            <Popup>
              <h4>{location.name}</h4>
              <p>{location.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
export default Section2;