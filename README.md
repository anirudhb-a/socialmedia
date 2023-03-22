<html>
 <head> 
   <h1 align="center">Car Pooling Application</h1>
  </head>
  
  <body>
    <p>
    <p> This is a carpooling app, a software platform designed to connect drivers and passengers going in the same direction or to the same destination, with the goal of reducing traffic congestion, lowering transportation costs, and promoting sustainable mobility. </p>
    <p> The application typically includes a search engine that allows users to find rides based on location, time, and other criteria, as well as a messaging system to communicate with potential carpool partners. </p>
     <p> Users can sign up for the application, create a profile, and search for carpools based on their location and destination. </p>
    <p> Users can create a profile with their personal information, including their name, contact information, and preferred carpooling times. </p>
    <p> Users can sign up and log in to the app using their email and password. </p>
    <p> Users can be of two types- Drivers or Commuters.
   Drivers have an option of choosing a 'Route' and sharing the car ride details for the riders to choose. </p>
    <p> Users can search for carpools based on their location and destination, and filter results by time and date. </p>
    <p> Car ride details include 'Route', ETA, Ride cost, Car model, Driver Rating, etc. </p>
    <p> Users can request the driver with the matched requirements of the ride relative to the route. </p>
   <p> Similarly, 'Drivers' can see relevant details of the commuters/users when they request a ride. They can then approve or reject the request
     and then lead the user to the 'Payment' process. </p>
    <p> Additional features such as real-time tracking of the vehicle, secure payment systems, ratings and reviews of drivers and passengers, and integration with public transportation schedules is possible. </p>
   <p> The app also allows users to create and join groups with other users, making it easy to organize regular carpools with the same people.</p>
    <footer>
      To install the app, simply clone the repository and install the necessary dependencies
    </footer>
    
 
<h1>    USER STORIES </h1>
    <header>
   <h2> Commuter </h2> 
   <p> As a commuter who frequently drives to work alone, I want to be able to find other commuters in my area who are traveling to the same location, so that I can save money on gas, reduce my carbon footprint, and have some company on my commute. In the car pooling application, I want to be able to specify my origin and destination, as well as my preferred departure time, so that I can find other commuters who are traveling on a similar route and schedule. I also want to be able to see the profiles of potential carpool partners, including their name, photo, and rating from other users, so that I can feel comfortable sharing a ride with them. Once I find a carpool partner, I want to be able to message them within the app to coordinate details such as pick-up location and any other specific requirements or preferences we may have. Finally, I want the app to have a rating and feedback system, so that I can rate my carpool partner and provide feedback on the ride, to help other users in the future make an informed decision when choosing a carpool partner. 

 <h2> Driver </h2> 
     
 
 <h2> Rider </h2> 
	As a rider, I want to be able to cancel a ride if my plans change and receive a refund if applicable, so that I can have flexibility in my travel plans.
 Considering a student regularly uses ride-sharing services to commute to college campus.He is a student, his timetable is sporadic. He requires the freedom to change his mind and, if necessary, get a refund when he cancels his ride. Aman also values a straightforward cancellation policy that won't put an excessive strain on his expenses.
The goal is to be able to quickly change his  travel arrangements by being able to cancel a ride and get a refund if necessary.
Alternately if strict cancellation policies are in place or if the cancellation procedure is complicated or time-consuming, customers may find it difficult to cancel a ride.


      
  <h2> Admin </h2> 
   
      
 <h1> ---  Milestones  --- </h1>
<h2> Identifying user personas and the target market for deciding on the technical design and creating a strategy for API intergration </h2>
<li> Creating user stories and use cases that detail the workflow of different user groups development and architecture of databases </li>
<li> Creating a schema to describe the connections among entities like users, reservations, and payments </li>
<li>User authentication and authorization: To ensure that only authorized users can access the application, it's important to implement user authentication and authorization. This involves adding features such as login, logout, and access control. </li>
<li> Creating queries and defining CRUD actions for each entity </li>
<li> Creating and joining carpools: The core functionality of the application is to allow users to create and join carpools. This should be a simple and intuitive process, with features such as searching for available carpools, joining a carpool, and creating a carpool. </li>
<li> Designing the API: This involves defining the endpoints, resources, and data models that will be used by the application. The API should be designed to be flexible and scalable, so that it can be easily modified as the application grows. </li>
<li> Utilizing appropriate APIs like GET, POST, PUT, etc. </li>
<li> Implementing the API: Once the API has been designed, it's time to start implementing it. This involves writing the server-side code that will handle requests and responses from the client.</li>
<li> Development of the application: Once the API is in place, it's time to develop the application itself. This involves creating the front-end and the back-end of the application. </li>
<li> Testing and debugging: Once the application has been built, it's important to test and debug it to ensure that it works as intended. This could involve manual testing, automated testing, or a combination of both. </li>
<p>	   
	    <h2> API resources </h2>
	     <h3>Google Maps API</h3>
	    This API can be used to obtain real-time navigation data and route optimization, as well as to generate a map of the carpool route.

<h3> RideShare API</h3>
	This API can be used to search for potential carpoolers and display information about their route and availability.

<h3> wilio API </h3>
	This API can be used to send notifications to users about carpool updates and confirmations.

<h3> Stripe API </h3>
	This API can be used to securely process and accept payments from users.

<h3> Braintree API </h3>
	This API can be used to securely process and accept payments from users.
 </p>
	  
<h2> User specifications </h2>
<p> Providing a list of the information that users must provide in order to create an account, including their name, email address, phone number, and password.
Include the requirements for multi-factor authentication, strong passwords, and email confirmation when describing the authentication and permission standards for user accounts. Develop tools that enable users to update their account details and manage account options, such as notification preferences and password resets. </p>

<h2>  Payment Approach </h2>
<p> Implement a payment handling system to manage passenger and driver activities.
Creating a payment dashboard so users can control their payment choices, see past transactions, and ask for refunds as required.
Making certain that all payment transactions are secure and adhere to all relevant laws.
Defining the requirements for payment processing:
Deciding what payment methods, such as credit cards, PayPal, or other payment methods, will be taken.
Defining the steps involved in handling payments, such as authorization, capture, and settlement.
</p>

    
  </body>
  
