import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapContainer = () => {
  return (
      <YMaps  query={{ apikey: '8d5cb0e3-0fdb-4747-b43b-041d2a0c7f6b' }}>
        <div style={{ width: '100%', height: 'auto' }}>
        <Map
            defaultState={{ center: [55.810237, 37.498872], zoom: 14.5 }}
            width="100%" height="100%"
        >
          <Placemark geometry={[55.810237, 37.498872]} />
        </Map>
        </div>
      </YMaps>
  );
};

export default MapContainer;