import React, { useState ,useRef } from 'react';
import { useJsApiLoader ,GoogleMap, LoadScript, DirectionsService, DirectionsRenderer,Autocomplete } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

//define a center point for Maps to load
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

  async function calculateRoute(){
    if(originRef.current.value === '' || destinationRef.current.value === ''){
      return 
    }

  // eslint-disable-next-line no-undef
  const directionService = new window.google.maps.DirectionsService();
  const results = await directionService.route({
    origin: originRef.current.value,
    destination: destinationRef.current.value,
    travelMode: 'DRIVING'
    
  })
  setDirections(results)
  setDistance(results.routes[0].legs[0].distance.text)
  setDuration(results.routes[0].legs[0].duration.text)
  console.log(results);
      originRef.current.value = '';
      destinationRef.current.value = '';
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
      const response  = await fetch('http://localhost:9000/rider/',{
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

    const showNearbyDrivers = async (rider) => {
      // Replace with your own implementation to send the rider information to a driver
      try {
        const response = await fetch('http://localhost:9000/riderOrders/'); //fetch api with the call back function
        const reminderData = await response.json();
        setAvaiableDriver(reminderData);
      } catch (error) {
        console.error(error);
      }
    }
  
    console.log(avaiableDriver.length);
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
  {/*  <button onClick={calculateRoute}>Calculate Ride :</button>  <br></br>
 
      <p> Distance : {distance} </p>
    
      <p> Duration : {duration} </p> */}


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

    {
      <div>
      <button onClick={showNearbyDrivers}>Request Driver</button>
      {
        (!(avaiableDriver.length === 0)) ? (
          Array.isArray(avaiableDriver) && avaiableDriver.map(c=>(
            <div>
              {c.id}
              {c.StartingLocation}
              {c.Destination}
              {c.DriverOrderNumber}
              {c.DriverPostStatus}
              
            </div>
          )

          )

        ) : null
      }
      </div>
    }

    </div>
  );
}

export default RiderFinder;
