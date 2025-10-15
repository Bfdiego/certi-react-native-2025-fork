import { useCallback, RefObject } from 'react';
import MapView from 'react-native-maps';

export function useMapCentering(mapRef: RefObject<MapView | null>) {
  const centerOn = useCallback(
    (lat: number, lng: number, animate = true) => {
      const region = {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      if (animate) {
        mapRef.current?.animateToRegion(region, 600);
      } else {
        mapRef.current?.animateToRegion(region);
      }
    },
    [mapRef]
  );

  return { centerOn };
}