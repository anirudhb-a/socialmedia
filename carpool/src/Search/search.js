import React, { useState } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const RiderFinder = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [pickUpTime,setpickUpTime] = useState('');
  const [directions, setDirections] = useState(null);

  const onOriginChange = (event) => {
    setOrigin(event.target.value);
  }

  const onDestinationChange = (event) => {
    setDestination(event.target.value);
  }

  const onPickUpTimeChange = (event) => {
    setpickUpTime(event.target.value);
  }

  const directionsCallback = (result) => {
    if (result != null) {
      setDirections(result);
      let dir = JSON.stringify(result);
      console.log("directions : "+ dir);
    }
  }

  const searchForRide = () => {
    if (origin && destination && pickUpTime) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING'
        },
        directionsCallback
      );
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="origin">Origin:</label> &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
        <input id="origin" type="text" value={origin} onChange={onOriginChange} />
      </div>
      <div>
        <label htmlFor="destination">Destination:</label>  &nbsp;  &nbsp;
        
        <input id="destination" type="text" value={destination} onChange={onDestinationChange} />
      </div>
      <br></br>
      <div>
        <label htmlFor="pickUpTime">Pick-up time:</label>  &nbsp;  &nbsp;
        <input id="pickUpTime" type="datetime-local" value={pickUpTime} onChange={onPickUpTimeChange} />
      </div>
      <br></br>
      <button onClick={searchForRide}>Search for ride</button>
      <br></br>
      <div style={containerStyle}>
        <LoadScript
          googleMapsApiKey="AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg"
        >
            <br></br>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default RiderFinder;
