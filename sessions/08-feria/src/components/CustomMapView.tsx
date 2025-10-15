import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Platform } from 'react-native';

interface AppMapViewProps {
  mapRef: React.RefObject<MapView | null>;
  location: { latitude: number; longitude: number } | null;
}

export const AppMapView: React.FC<AppMapViewProps> = ({ mapRef, location }) => {
  return (
    <MapView
      ref={mapRef}
      style={{ flex: 1 }}
      showsUserLocation
      showsMyLocationButton={Platform.OS === 'android'}
    >
      {location && (
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Estás aquí"
        />
      )}
    </MapView>
  );
};