import React, { useState,useEffect } from 'react';
<<<<<<< HEAD
import { Button , Input } from 'antd';
=======

>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8



const DriverRide = () => {
<<<<<<< HEAD
  const [data, setData] = useState(
    {DriverOrderNumber: '',
      DriverId:'',
      StartingLocation: '',
      Destination: '',
      Status: 'Open',
      Seats: '',
      Cost: ''
    }
  );
  const driverId = "6432d563ba5f6c81b062c082";
  const count = 0;
=======
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

>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8
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

<<<<<<< HEAD
  const PostRide = async (e) => {
    const newOrderNumber = Math.floor(Math.random() * 1000000000).toString();
    //setData({ ...data, DriverOrderNumber:  newOrderNumber });
    
   
    console.log(data);
=======
  const addReminder = async () => {
>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8
    try {
      const response = await fetch('http://localhost:9000/riderOrders/', { //fetch api with the call back function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
        body: JSON.stringify({...data, DriverOrderNumber: newOrderNumber, DriverId: driverId}),
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
    Cost: ''
  })
  };
  
  const driverValues = (e) => {

    setData({ ...data, [e.target.name]: e.target.value });
    
};  

  return (
    <div>
      <h1>Create a Ride Requests</h1>
      <Input placeholder='StartingLocation' value={data.StartingLocation} name='StartingLocation' onChange={driverValues}/>
      <Input placeholder='Destination' value={data.Destination} name='Destination' onChange={driverValues}/>
      <Input placeholder='Seats' value={data.Seats} name='Seats' onChange={driverValues}/>
      <Input placeholder='Cost' value={data.Cost} name='Cost' onChange={driverValues}/>
      <Button
      onClick={PostRide}
      >
        Create a ride
      </Button>
=======
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
>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8
    </div>
  );
};

export default DriverRide;
