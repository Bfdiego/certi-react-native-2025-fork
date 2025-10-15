import React, { useEffect, useRef, useState, useCallback } from 'react';
import { StyleSheet, ActivityIndicator, Pressable, View, Platform, Alert, Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Search } from '../../src/components/Search';
import { SearchBar } from '../../src/components/SearchBar';
import { useLocation } from '../../src/hooks/useLocation';
import { useMapCentering } from '../../src/hooks/useMapCentering';
import { GoToLocationFab } from '../../src/components/GoToLocationFab';
import { AppMapView } from '../../src/components/CustomMapView';

export default function MapScreen() {
  const mapRef = useRef<MapView>(null);
  const { location, setLocation, loading } = useLocation();
  const { centerOn } = useMapCentering(mapRef);
  const [jumping, setJumping] = useState(false);
  const [searchText, setSearchText] = useState('');  

  const goToMyLocation = useCallback(async () => {
    try {
      setJumping(true);
      const { status } = await Location.getForegroundPermissionsAsync();
      if (status !== 'granted') {
        const req = await Location.requestForegroundPermissionsAsync();
        if (req.status !== 'granted') {
          Alert.alert('Sin permisos', 'No puedo acceder a tu ubicación.');
          setJumping(false);
          return;
        }
      }
      const pos = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(pos.coords);
      centerOn(pos.coords.latitude, pos.coords.longitude, true);
    } catch (e) {
      Alert.alert('Error', 'No se pudo obtener tu ubicación.');
    } finally {
      setJumping(false);
    }
  }, [centerOn]);

  if (loading) return <ActivityIndicator style={{ flex: 1 }} size="large" />;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <AppMapView mapRef={mapRef} location={location} />
        <Search>
          <Text>Hola Bola</Text>
          <SearchBar value={searchText} onChange={setSearchText} />
        </Search>
        <GoToLocationFab onPress={goToMyLocation} jumping={jumping} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  map: { flex: 1 },
});
