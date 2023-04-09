import React, { useState ,useRef } from 'react';
import { useJsApiLoader ,GoogleMap, LoadScript, DirectionsService, DirectionsRenderer,Autocomplete } from '@react-google-maps/api';

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
  const [pickUpTime, setPickUpTime] = useState('');
  const [directions, setDirections] = useState(null);
  const [seats, setSeat] = useState('');
  /** @type React.MutableRefObject<HTMLInputElement>*/
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement>*/
  const destinationRef = useRef();
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg" 
    , libraries: ['places']
  }
  )
  
  if(!isLoaded) {
    return <div>loading......</div>;
  }


/*   const onOriginChange = (event) => {
    setOrigin(origin,[event.target.name] = event.target.value);
  }

  const onDestinationChange = (event) => {
    //setDestination(event.target.value);
  } */

  const onPickUpTimeChange = (event) => {
    setPickUpTime(event.target.value);
  }

  const onSeatChange = (event) => {
    setSeat(event.target.value);
  }

  const directionsCallback = (result) => {
    if (result != null) {
      setDirections(result);
      console.log(result);
      originRef.current.value = '';
      destinationRef.current.value = '';
    }
  }

  const sendRequestToDriver = async (rider) => {
    // Replace with your own implementation to send the rider information to a driver
    try{
      const response  = await fetch('http://localhost:9000/riders/',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({
          origin: rider.origin,
          destination: rider.destination,
          pickUpTime: rider.pickUpTime,
          seats: rider.seats,
        }),
      });
      const data = await response.json();
      console.log(data);
      console.log('Sending rider info to driver:', {
        origin: origin,
        destination: destination,
        pickUpTime: pickUpTime,
        seats: seats,
      });
    }
      catch (error) {
        console.error(error);
      }
    }
  
  

  const searchForRide = () => {
    if (originRef.current.value && destinationRef.current.value && pickUpTime && seats) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: originRef.current.value,
          destination: destinationRef.current.value,
          travelMode: 'DRIVING'
        },
        directionsCallback
      );
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="origin">Origin:</label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Autocomplete>
          <input id="origin" type="text" name= 'Origin' /* value={origin} /* onChange={onOriginChange} */ ref={originRef}/>
        </Autocomplete>
        
      </div>
      <div>
        <label htmlFor="destination">Destination:</label> &nbsp; &nbsp; &nbsp; 
        <Autocomplete>
        <input id="destination" type="text" name = 'Destination' /* value={destination} /* onChange={onDestinationChange} */ ref={destinationRef}/>
        </Autocomplete>
        
      </div>
      <div>
        <label htmlFor="pickUpTime">Pick-up time:</label>&nbsp; &nbsp; &nbsp; 
        <input id="pickUpTime" type="datetime-local" value={pickUpTime} onChange={onPickUpTimeChange} />
      </div>
      
      <label htmlFor='seats'>Seats Required:</label>&nbsp; &nbsp; &nbsp; 
      <input id="seats" type="number" value={seats} onChange={onSeatChange}/>
      <br></br>
      <br></br>
      <button onClick={searchForRide}>Search for ride</button>  <br></br>

      <br></br>


      <div style={containerStyle}>
{/*        <LoadScript
          googleMapsApiKey="AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg"
        >  */}
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
{/*     </LoadScript>  */}
      </div>
      <br></br>

<button onClick={sendRequestToDriver}>Request Driver</button>
    </div>
  );
}

export default RiderFinder;
