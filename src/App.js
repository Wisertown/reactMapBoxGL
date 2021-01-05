import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';
import MapGL from '@urbica/react-map-gl';
import './App.css';

function App() {
  const initialState = {
  settings: {
    accessToken: 'pk.eyJ1Ijoia3prdiIsImEiOiI5QTV5TzdVIn0.upR1M0jGXbQPvkte-SaQ1w',
    // mapStyle: 'https://tiles.earthoptics.com/ndvi/{z}/{x}/{y}.png',
    venue: {
      address: '',
      longitude: '',
      latitude: '',
      bbox: {},
    },
  },
  viewport: {
    zoom: 12,
    latitude: 42.704868874031554,
    longitude: -92.65880554936408
  },
};

  return (
    <div className="App">
      test
      <MapGL
        style={{ width: '100%', height: '400px' }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        {...initialState.settings}
        {...initialState.viewport}
      ></MapGL>
    </div>
  );
}

export default App;
