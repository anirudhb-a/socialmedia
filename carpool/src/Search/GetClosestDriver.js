import React, { useState, useEffect } from "react";
import ClosestCustomer from "./closestCustomer";

// Function to calculate the Haversine distance between two points
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const deltaPhi = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(deltaPhi / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const GetClosestDriver = (props) => {
  console.log(props);
  const [closestDriver, setClosestDriver] = useState('');
  useEffect(() => {
    fetchDrivers(props.startLat, props.startLon, props.endLat, props.endLon);

  }, [props]);

  const fetchDrivers = async (userStartLat, userStartLon, userEndLat, userEndLon) => {
    try {
      const response = await fetch("http://localhost:9000/riderOrders/"); // Replace with actual API endpoint to fetch drivers
      if (!response.ok) {
        throw new Error("Failed to fetch drivers");
      }
      const drivers = await response.json();
      const closestdriver = getClosestDriver(userStartLat, userStartLon, userEndLat, userEndLon, drivers);
      setClosestDriver(closestdriver);
    } catch (error) {
      console.error(error);
    }
  }

  const getClosestDriver = (userStartLat, userStartLon, userEndLat, userEndLon, drivers) => {
    let ClosestDriver = null;
    let minDistance = 5; // Initialize with a very large value
    drivers.forEach(driver => {
        // Extract driver and user location coordinates from their addresses
        const startDistance = haversine(userStartLat, userStartLon, driver.OriginLatitude, driver.OriginLongitude);
        const endDistance = haversine(userEndLat, userEndLon, driver.DestinationLatitude, driver.DestinationLongitude);
        const totalDistance = startDistance + endDistance;
        console.log(startDistance);
        console.log(endDistance);
        console.log(totalDistance < minDistance);
        if (totalDistance < minDistance) {
          minDistance = totalDistance;
          ClosestDriver = driver;
        }
    });
/*     for (const driver of drivers) {
      const startDistance = haversine(userStartLat, userStartLon, driver.OriginLatitude, driver.OriginLongitude);
      const endDistance = haversine(userEndLat, userEndLon, driver.DestinationLatitude, driver.DestinationLongitude);
      const totalDistance = startDistance + endDistance;
      if (totalDistance < 1) {
        minDistance = totalDistance;
        ClosestDriver = driver;
        console.log('sdas')
      }
    } */

    return ClosestDriver;
  }
  return (
    <div>
      {closestDriver ? (
        <p>Closest driver: {closestDriver.DriverOrderNumber}</p>
      ) : (
        <p>No drivers found......</p>
      )}
      <button>accept</button>
      <button>reject</button>
      <ClosestCustomer/>
    </div>
  );
}

export default GetClosestDriver;
