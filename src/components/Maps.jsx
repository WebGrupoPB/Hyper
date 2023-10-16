import React, {useState, useMemo} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

/* Atanasio tzul*/  /*  
                        lat: 14.595200,
                        lng: -90.541155,
                        */

/* Villa Hermosa*/  /*  
                        lat: 14.5242500,
                        lng: -90.5523355, 
                        */

/* Mulua, Reu*/     /* 
                        lat: 14.5810955,
                        lng: -91.6275000,
                    */

const containerStyle = {
  width: '100%',
  height: '100%',
  zIndex: '0',
};

const zoom = 15;

function Maps({ showContent1, showContent2, showContent3 }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCscKjHtmXETUk2EaN9Oc0XMK7Ez2cll8Y"
  })

  const [map, setMap] = React.useState(null)

  const coordinates1 = {
    lat: 14.595200,
    lng: -90.541155,
  };
  const coordinates2 = {
    lat: 14.5242500,
    lng: -90.5523355,
  };
  const coordinates3 = {
    lat: 14.5810955,
    lng: -91.6275000,
  };

  const coordinates = showContent1
    ? coordinates1
    : showContent2
    ? coordinates2
    : coordinates3;



  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(coordinates);
    map.fitBounds(bounds);

    setMap(map)
  }, [coordinates])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(map)
  }, [coordinates])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={zoom}
        /* onLoad={onLoad} */
        /* onUnmount={onUnmount} */
      >
        {showContent1 && <Marker position={coordinates1} />}
        {showContent2 && <Marker position={coordinates2} />}
        {showContent3 && <Marker position={coordinates3} />}
      </GoogleMap>
  ) : <></>
}

export default React.memo(Maps);