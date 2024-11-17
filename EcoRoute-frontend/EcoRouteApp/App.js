import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text, View } from 'react-native';
import axios from 'axios';
import MapView, { Marker } from 'react-native-maps';

const App = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [route, setRoute] = useState(null);

  const fetchRoute = async () => {
    try {
      const response = await axios.post('http://localhost:5000/get-route', {
        origin,
        destination,
      });
      setRoute(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TextInput
        placeholder="Enter Origin"
        value={origin}
        onChangeText={setOrigin}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Enter Destination"
        value={destination}
        onChangeText={setDestination}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Get Route" onPress={fetchRoute} />

      {route && (
        <View style={{ flex: 1 }}>
          <Text>Distance: {route.distance}</Text>
          <Text>Duration: {route.duration}</Text>

          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} title="Origin" />
            <Marker coordinate={{ latitude: 37.78925, longitude: -122.4354 }} title="Destination" />
          </MapView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
