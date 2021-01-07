import React, {useState, useEffect} from 'react';
import MapGL, { Source, Layer, Marker }  from '@urbica/react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button, Slider } from 'rsuite';
import './App.css';
import geoData from './data/data.json';
import 'rsuite/dist/styles/rsuite-default.css';
const style = {
  padding: '1px',
  color: 'red',
  cursor: 'pointer',
  zIndex: '700',
  height: '10px',
  width: '4px',
};
function App() {
  const [useZoom, setZoom] = useState(13);
  const [useView, setView] = useState('satelite');
  const locationData = {
    latitude: 42.704868874031554,
    longitude: -92.65880554936408,
    zoom: useZoom
  };
  const [viewport, setViewport] = useState(locationData);
  useEffect(() => {
    setViewport({
      latitude: 42.704868874031554,
      longitude: -92.65880554936408,
      zoom: useZoom
    });
  }, [useZoom]);
  /* useEffect(() => {
    // setViewport(locationData);
  }, [useView]) */
  const createButton = (title, text) => {
    return <Button appearance="primary" active={ useView === title ? true : false} onClick={ () => changeView(title)} >{text}</Button>
  }
  const createMarkers = (data) => {
    return (data.map((index) => (
      <Marker
        key={index}
        latitude={index[0]}
        longitude={index[1]}
        >
        <div style={style}>|</div>
      </Marker>
      )));
  };
  const changeView = (arg) => {
    setView(arg);
  }
  return (
    <div className="App">
      <MapGL
      style={{ width: '100%', height: '400px' }}
      maxZoom={16}
      minZoom={10}
      scrollZoom={false}
      mapStyle='mapbox://styles/mapbox/light-v9'
      accessToken='pk.eyJ1Ijoia3prdiIsImEiOiI5QTV5TzdVIn0.upR1M0jGXbQPvkte-SaQ1w'
      onViewportChange={setViewport}
      {...viewport}
      >
      {useView === 'geoJson' ? 
       createMarkers(geoData.coordinates)
     : null }
    { useView === 'ndvi' ?
    <div>hello hello hello</div>
  
   /*  <> 
            <Source id='route' type='geojson' data={geoData} />
  <Layer
    id="route"
    type="symbol"
    source="route"
    layout={{
      'line-join': 'round',
      'line-cap': 'round'
    }}
    paint={{
      'line-color': '#888',
      'line-width': 8
    }} /> </>  */: null
    } 


      </MapGL>

      <div className='buttons'>
          <div>Map Type:</div>
          {createButton('satelite', 'Satelite')}
           {createButton('ndvi', 'NDVI')}
            {createButton('geoJson', 'Multi Point')}
     
      </div>
      <div className='slider'>
      Zoom Level:
      <Slider
      defaultValue={13}
      min={10}
      step={1}
      max={16}
      graduated
      progress
      onChange={value => {
        setZoom(value);
      }}
      renderMark={mark => {
        return mark;
      }}
      />
      </div>
    </div>
    );
}

export default App;
