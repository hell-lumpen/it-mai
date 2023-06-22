import React, { useRef, useEffect, useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import '../App.css';

const MapContainer = () => {
  const mapContainerRef = useRef(null);
  const [mapStyle, setMapStyle] = useState({ width: '300px', height: '400px' });

  useEffect(() => {
    const resizeMap = () => {
      const mapContainer = mapContainerRef.current;
      if (mapContainer) {
        const parentElement = mapContainer.parentElement;
        const parentWidth = parentElement.offsetWidth;
        const parentHeight = parentElement.offsetHeight;
        setMapStyle({ width: `${parentWidth}px`, height: `${parentHeight}px` });
      }
    };

    resizeMap();

    window.addEventListener('resize', resizeMap);
    return () => {
      window.removeEventListener('resize', resizeMap);
    };
  }, []);

  return (
      <YMaps query={{ apikey: '8d5cb0e3-0fdb-4747-b43b-041d2a0c7f6b' }}>
          <div ref={mapContainerRef} className="map-container">
            <Map
                defaultState={{ center: [55.810237, 37.498872], zoom: 14.5 }}
                style={mapStyle}
            >
              <Placemark geometry={[55.810237, 37.498872]} />
            </Map>
          </div>
      </YMaps>
  );
};

export default MapContainer;