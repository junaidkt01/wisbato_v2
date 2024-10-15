// import React, { useEffect, useRef } from 'react';
// import mapboxgl, { Marker } from 'mapbox-gl';

// interface MapProps {
//   accessToken: string;
//   locations: { longitude: number; latitude: number }[];
// }

// const MapComponent: React.FC<MapProps> = ({ accessToken, locations }) => {
//   const mapContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     mapboxgl.accessToken = accessToken;
//     const map = new mapboxgl.Map({
//       container: mapContainerRef.current!,
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [locations[0].longitude, locations[0].latitude], // Center the map on the first location
//       zoom: 15
//     });

//     // Add markers for each location
//     locations.forEach(location => {
//       new Marker().setLngLat([location.longitude, location.latitude]).addTo(map);
//     });

//     // Clean up
//     return () => map.remove();
//   }, [accessToken, locations]);

//   return <div ref={mapContainerRef} style={{ width: '100%', height: '400px' }} />;
// };

// export default MapComponent;


// // import React, { useEffect } from 'react';
// // import mapboxgl from 'mapbox-gl';

// // interface MapProps {
// //   accessToken: string;
// // }

// // const MapComponent: React.FC<MapProps> = ({ accessToken }) => {
// //   useEffect(() => {
// //     mapboxgl.accessToken = accessToken;
// //     const map = new mapboxgl.Map({
// //       container: 'map-container',
// //       style: 'mapbox://styles/mapbox/streets-v11',
// //       center: [75.7804, 11.2588], // starting position [lng, lat]
// //       zoom: 12
// //     });

// //     // Clean up
// //     return () => map.remove();
// //   }, [accessToken]);

// //   return <div id="map-container" style={{ width: '100%', height: '400px' }} />;
// // };

// // export default MapComponent;