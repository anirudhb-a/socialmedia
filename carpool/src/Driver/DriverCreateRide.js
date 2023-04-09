import React, { useState,useEffect } from 'react';




const DriverRide = () => {
  const [data, setdata] = useState(
    {DriverOrderNumber: 'asdasd',
      DriverId:'6432d563ba5f6c81b062c082',
      StartingLocation: 'northeastern',
      Destination: 'aspinwall',
      Status: 'Open',
      Seats: 4,
      Cost: 100
    }
  );
  const driverId = "6432d563ba5f6c81b062c082";

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

  const addReminder = async () => {
    try {
      const response = await fetch('http://localhost:9000/riderOrders/', { //fetch api with the call back function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const responsedata = await response.json();
      console.log(responsedata);
    } catch (error) {
      console.error(error);
    }
  };

/*   const acceptRequest = (request) => {
    // Logic for accepting a ride request goes here
    console.log(`Accepted ride request from ${request.origin} to ${request.destination}`);
    setRideRequests(rideRequests.filter((r) => r !== request));
  };

  const rejectRequest = (request) => {
    // Logic for rejecting a ride request goes here
    console.log(`Rejected ride request from ${request.origin} to ${request.destination}`);
    setRideRequests(rideRequests.filter((r) => r !== request));
  };
   */
  return (
    <div>
      <h1>Create a Ride Requests</h1>
      <button onClick={addReminder}>Craete a ride</button>
    </div>
  );
};

export default DriverRide;
