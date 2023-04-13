import React, { useState ,useRef, useEffect } from 'react';
import { useJsApiLoader ,GoogleMap, LoadScript, DirectionsService, DirectionsRenderer,Autocomplete } from '@react-google-maps/api';
import riderMatch from '../RideMatch/rideMatch.js';
import PaymentComp from '../Payment/payment';
import axios from 'axios';
//import NearestDriver from '../RideMatch/rideMatch';

const containerStyle = {
  width: '100%',
  height: '400px'
};

//define a center point for Maps to load
const center = {
  lat: 37.7749,
  lng: -122.4194
};


const libraries = ['places'];
const RiderFinder = () => {
  let diplayDrivers = true;
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [pickUpTime, setPickUpTime] = useState('');
  const [directions, setDirections] = useState(null);
  const [seats, setSeat] = useState('');

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [location, setLocation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [avaiableDriver, setAvaiableDriver] = useState([]);
  const [riderLocation, setRiderLocation] = useState([]);
  const driverLocation = [40.7282, -74.0776];
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [showPayment, setshowPayment] = useState(false);


  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  
 
b22e113bef19674fa92b28e2b062596ffebbd95b
  /** @type React.MutableRefObject<HTMLInputElement>*/
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement>*/
  const destinationRef = useRef();
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg" 
    , libraries: libraries
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
  /*const handleGeocodeLocation = async () => {
    
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        const { lat, lng } = data.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        setRiderLocation(lat,lng);
        riderMatch({riderLocation,driverLocation});
        //setErrorMessage("");
      } else {
        setErrorMessage("Error while requesting geocoding API");
      }
    } catch (error) {
      setErrorMessage("Error while requesting geocoding API");
    }
  };*/

  /*const sendRequestToDriver = async (rider) => {
   
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
    }*/
   
    const showNearbyDrivers = async (rider) => {
      // Replace with your own implementation to send the rider information to a driver
      try {
        const response = await fetch('http://localhost:9000/riderOrders/'); //fetch api with the call back function
        //SET_THIS_WHEN_DRIVER_ACCEPTS_THE_RIDE
        //setshowPayment(true);
        const reminderData = await response.json();
        setAvaiableDriver(reminderData);

        //LOGIC TO LOAD PAYMENT COMP
        //reminderData[0].rideStatus ? setshowPayment(true) : console.log("RIDE NOT CONFIRMED YET");

        console.log(reminderData);
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
      

{/*       {
        diplayDrivers ? <NearestDriver Origion = {origin} /> :
        <div>No Drivers Found please try again later</div>
      } */}
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
    <br></br>
    <div>
    <div>
    
      {showPayment ? <PaymentComp /> : console.log("RIDE CONFIRMING........") }
    </div>
    </div>
    <br></br>
{
  
}
    </div>
  );
}

export default RiderFinder;
