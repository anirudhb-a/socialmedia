import React, { useState,useEffect } from 'react';
import { Button , Input } from 'antd';



const DriverRide = () => {
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

  const PostRide = async (e) => {
    const newOrderNumber = Math.floor(Math.random() * 1000000000).toString();
    //setData({ ...data, DriverOrderNumber:  newOrderNumber });
    
   
    console.log(data);
    try {
      const response = await fetch('http://localhost:9000/riderOrders/', { //fetch api with the call back function
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    </div>
  );
};

export default DriverRide;
