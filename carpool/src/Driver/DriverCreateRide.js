import React, { useState,useEffect , useRef } from 'react';
//import { Button , Input } from 'antd';
import { useJsApiLoader ,GoogleMap, LoadScript, DirectionsService, DirectionsRenderer,Autocomplete } from '@react-google-maps/api';


const libraries = ['places'];
const DriverRide = () => {
  const [data, setData] = useState(
    {DriverOrderNumber: '',
      DriverId:'',
      StartingLocation: '',
      Destination: '',
      DriverPostStatus: 'Open',
      Seats: '',
      Cost: '',
      OriginLatitude:'',
      OriginLongitude:'',
      DestinationLatitude:'',
      DestinationLongitude:'',
    }
  );
  const [originLat, setOriginLat] = useState(0);
  const [originLng, setOriginLng] = useState(0);
  const [destinationLat, setDestinationLat] = useState(0);
  const [destinationLng, setDestinationLng] = useState(0);
  const [pickUpTime, setPickUpTime] = useState('');
  const [directions, setDirections] = useState(null);
  const driverId = "6432d563ba5f6c81b062c082";
  const [errorMessage, setErrorMessage] = useState("");
  const count = 0;
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

  const CreateRides = async () => {
    try {
      const response = await fetch('http://localhost:9000/riderOrders/');
      const riderData = await response.json();
      console.log("Rider Data at Driver side", riderData.Driver);
    }
    catch(error){
      console.error(error);
    }
  }
  
/*   useEffect(() => {
    CreateRides();
  }, []); */


/*   const fetchLocationLatLngStartLocation = async (locations) => {
    const location = locations; // Replace with the location you want to fetch lat/lng for
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        console.log('hello')
        const { lat, lng } = results[0].geometry.location;
        setOriginLat(lat());
        setOriginLng(lng());
        console.log(originLat);
      } else {
        console.error('Error fetching lat/lng:', status);
      }
    });
  };
 */
  const handleGeocodeLocation = async (location) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyBaE0BFCbpDBdN5NkUK2DA-2Jm7IRnoGZg`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.status === "OK") {
        const { lat, lng } = data.results[0].geometry.location;
        const locationObject = ({latProp:lat,lngProp:lng});
        //console.log(locationObject.latProp)
        return locationObject;
        
      } else {
        setErrorMessage("Error while requesting geocoding API");
      }
    } catch (error) {
      setErrorMessage("Error while requesting geocoding API");
    }
  };


/*   const fetchLocationLatLngDestination = async (locations) => {
    const location = locations; // Replace with the location you want to fetch lat/lng for
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK' && results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
       // console.log('hello')
        setDestinationLat(lat());
        setDestinationLng(lng());
        
        console.log(destinationLat);
      } else {
        console.error('Error fetching lat/lng:', status);
      }
    });
  }; */
 
  const PostRide = async () => {
    const origin =  await handleGeocodeLocation(originRef.current.value);
    const destination = await handleGeocodeLocation(destinationRef.current.value);
    const newOrderNumber = Math.floor(Math.random() * 1000000000).toString();
    console.log(data)
    try {
      const response = await fetch('http://localhost:9000/riderOrders/', { //fetch api with the call back function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({...data, DriverOrderNumber: newOrderNumber,
          DriverId: driverId,
          StartingLocation: originRef.current.value,
          Destination: destinationRef.current.value,
          OriginLatitude: origin.latProp,
          OriginLongitude: origin.lngProp,
          DestinationLatitude: destination.latProp,
          DestinationLongitude: destination.lngProp,
          Status:"Open"}),
      });
      const responsedata = await response.json();
      console.log(responsedata);

    } catch (error) {
      console.error(error);
    }
    setData( {DriverOrderNumber: '',
    DriverId:'',
    StartingLocation: '',
    Destination: '',
    Status: 'Open',
    Seats: '',
    Cost: '',
    OriginLatitude:'',
    OriginLongitude:'',
    DestinationLatitude:'',
    DestinationLongitude:'',
  })
  originRef.current.value = '';
  destinationRef.current.value = '';
  };
  
  const driverValues = (e) => {

    setData({ ...data, [e.target.name]: e.target.value });
    
};  
  
  return (
    <div>
      <h1>Create a Ride Requests</h1>
      <Autocomplete>
        <input name = 'StartingLocation' /* value={destination} /* onChange={onDestinationChange} */ ref={originRef}/>
      </Autocomplete>
      
      <Autocomplete>
      <input name = 'Destination' /* value={destination} /* onChange={onDestinationChange} */ ref={destinationRef}/>
      </Autocomplete>
      <input placeholder='Seats' value={data.Seats} name='Seats' onChange={driverValues}/>
      <input placeholder='Cost' value={data.Cost} name='Cost' onChange={driverValues}/>
      <button
      onClick={PostRide}
      >
        Create a ride
      </button>
    </div>
  );
};

export default DriverRide;