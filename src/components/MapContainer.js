import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const MapContainer = () => {
  const mapData = {
    center: [55.810237, 37.498872], // Координаты центра карты
    zoom: 14.5, // Масштаб карты
  };

  const placemarkCoordinates = mapData.center; // Координаты точки

  return (
      <YMaps query={{ apikey: '8d5cb0e3-0fdb-4747-b43b-041d2a0c7f6b\n' }}>
        <div style={{ width: '100%', height: 'auto' }}>
          <Map defaultState={mapData} width="100%" height="100%">
            <Placemark geometry={placemarkCoordinates} />
          </Map>
        </div>
      </YMaps>
  );
};

export default MapContainer;