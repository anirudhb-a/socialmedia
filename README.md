<html>
 <head> 
   <h1 align="acenter">Car Pooling Application</h1>
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
As a driver who frequently drives to specific location , I want to be able to decide the rider who I take along , after reviewing their personal information. I want to give feedback on the various riders who I take along . I want to set the route I take and the date and time of the route . I want to decide the car I use and number of seats of available. I want to see the fare for all the passengers I take along. I want to see history of specific riders for a window of 15 days prior to the drive. I want to have an option to decline or ignore a specific rider


 
 <h2> Rider </h2> 
	As a rider, I want to be able to cancel a ride if my plans change and receive a refund if applicable, so that I can have flexibility in my travel plans.
 Considering a student regularly uses ride-sharing services to commute to college campus.He is a student, his timetable is sporadic. He requires the freedom to change his mind and, if necessary, get a refund when he cancels his ride. Aman also values a straightforward cancellation policy that won't put an excessive strain on his expenses.
The goal is to be able to quickly change his  travel arrangements by being able to cancel a ride and get a refund if necessary.
Alternately if strict cancellation policies are in place or if the cancellation procedure is complicated or time-consuming, customers may find it difficult to cancel a ride.


      
  <h2> Admin </h2>

As a System Admin, I want to be able to add new drivers to the system so they can start providing rides to customers as an admin. I want to be able to assess driver applications as an admin and pick and choose to accept or reject them based on the applicants' driving records, the state of their vehicles, and other relevant factors. I want to be able to control how drivers and passengers manage their carpooling schedules, including the ability to change or cancel rides as needed. I want to be able to keep an eye on the carpooling activity on the platform, including how many rides are taken, how much money is made, and whether there are any problems or complaints. The goal is to have view with complete access to the system inorder to see the total earnings rides, total number of customers and traffic that the application is getting.
   
      
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

<h2>User Personas</h2>
<li>1.As a rider, I want to be able to cancel a ride if my plans change and receive a refund if applicable, so that I can have flexibility in my travel plans.</li>
<li>Name: Aman Malawade </li>
<li>Age:22</li>
<li>Occupation: Student</li>
<p>Description: Aman regularly uses ride-sharing services to commute to college campus.He is a student, his timetable is sporadic. He requires the freedom to change his mind and, if necessary, get a refund when he cancels his ride. Aman also values a straightforward cancellation policy that won't put an excessive strain on his expenses.</p>
<li>Goal: To be able to quickly change his  travel arrangements by being able to cancel a ride and get a refund if necessary.
Challenges: If strict cancellation policies are in place or if the cancellation procedure is complicated or time-consuming, customers may find it difficult to cancel a ride.</li>
<li>Pain Points: He might lose money if he is unable to cancel a trip or get a refund, which would affect his  finances.</li>
<br>
<br>

<li>Name: Pooja Konde</li>
<li>Age: 26</li>
<li>Occupation: UI/UX Designer</li>
<li>Description: While Pooja typically takes public transportation to work, she sometimes uses ride-sharing services to travel further distances or to go to events  in other areas of the city. She prefers flexible travel choices that are convenient. </li>
<li>Goals:</li>
<li>To be adaptable with her transport arrangements</li>
<li>Having the option to reschedule a transport if her plans alter and to get a reimbursement, if necessary</li>
<li>Challenges:</li>
<li>A meager transportation allowance</li>
<li>Frequently makes last-minute arrangements, which increases the likelihood of cancellations</li>
<li>Favors dependability and transparency in ride-sharing programs</li>
<li>Pain points:</li>
<li>Having trouble getting a refund after canceling a trip</li>
<li>Lack of transparency regarding refund procedures</li>
<li>Inconvenience and additional expenses </li>
<br>
<br>

<li>2.	As a user of the carpooling app, I want to be able to access customer support in case I have any issues with my ride or need assistance with the app.</li>

<li>Name : Harry Styles</li>
<li>Age: 37</li>
<li>Occupation: Sales Manager</li>
<li> Description:Harry commutes to work every day using carpooling applications from his city home. He needs to be able to depend on his transportation options because he is a busy professional with a demanding schedule. He values convenience and effectiveness and views apps with user-friendly interfaces.</li>


<li>Goals:</li>
<li>To be able to swiftly and easily contact customer service if he had any problems with his ride or the app.</li>
<li>So that he can arrive at work on time, to have his problems handled quickly and effectively.</li>
<li>To have the peace of mind that the app offers dependable customer support whenever he requires it.</li>
<li>Challenges:</li>
<li>Lack of time to handle any difficulties or problems that might emerge during his commute.</li>
<li>Using a carpooling program every day to get to work.</li>
<li>Frustration when problems occur that complicate or prolong his journey.</li>
<li>Pain Points:</li>
<li>Long wait periods or challenges contacting customer service when necessary.</li>
<li>Unresolved issues that interfere with his plans or create delays.</li>
<li>Lack of assurance and faith in the app's ability to deliver dependable customer assistance.</li>

<li>User Persona 2:</li>
<li>Name : Kaushiki Ambi</li>
<li>Age: 24</li>
<li>Occupation: Student</li>
<li>Description:Kaushiki is a graduate student who occasionally uses carpooling apps to travel to campus or complete chores in the neighborhood. She has a limited income and requires accessible transportation. She expects openness and truthfulness from the apps she utilizes.</li>

<li>Goals:</li>
<li>To have access to customer service in the event that she has any problems with her ride or the program.</li>
<li>To have faith that the program is open and honest about its policies.</li>
<li>To have her problems dealt with fairly and quickly.</li>
<li>Challenges:</li>
<li>Limited funds and the need to locate reasonably priced transportation choices.</li>
<li>Limited knowledge of carpooling apps' rules and procedures. Limited experience using them.</li>
<li>No opportunity to address problems that might come up on the way to work.</li>
<li>Pain Points:</li>
<li>Policies and processes that are opaque or unclear and cause confusion or annoyance.</li>
<li>A challenge in contacting customer service or lengthy wait periods.</li>
<li>Unresolved problems that increase tension or burden you financially.</li>

<li>3.  As a rider, I want to be able to see the ratings and feedback of potential drivers before booking a ride so that I can choose a safe and reliable ride.</li>

<li>Name : Kartika Aryan </li>
<li>Age: 27</li>
<li>Occupation: Marketing Manager</li>
<li>Description:Kartika is a young professional who regularly commutes to work and attends social events using ride-hailing apps. She favors apps that offer clear information about their drivers because she values safety and dependability.</li>

<li>Goals:</li>
<li>To have access to prospective drivers' reviews and ratings before reserving a ride.</li>
<li>To feel secure in the driver's dependability and safety.</li>
<li>To steer clear of uncomfortable or dangerous situations during her journey.</li>
<li>Challenges:</li>
<li>Worries when using ride-hailing applications regarding reliability and safety.</li>
<li>Limited opportunity to compare ratings and reviews of potential drivers.</li>
<li>Frustration when problems with her ride occur that could have been prevented with a better choice of driver.</li>
<li>Paint Points:</li>
<li>Transparency issues or insufficient data on possible drivers.</li>
<li>During her ride, she had unpleasant or unsafe encounters because the driver was not suitable.</li>
<li>Having trouble contacting customer service or fixing problems when they occur.</li>


<li>User Persona 2</li>
<li>Name : Sid Janwale </li>
<li>Age: 36</li>
<li>Occupation: Accountant</li>
<li> Description: Sid is a family man who occasionally uses ride-hailing apps to perform errands or attend family gatherings. He places a high value on security and dependability and wants to be certain that the chauffeur he chooses is reliable and responsible.</li>

<li>Goals:</li>
<li>To have access to prospective drivers' reviews and ratings before reserving a ride.</li>
<li>To feel secure in the driver's safety and responsibility.</li>
<li>To stay away from uncomfortable or dangerous situations while riding.</li>
<li>Challenges:</li>
<li>Using ride-hailing apps raises questions about reliability and safety, especially when going with family.</li>
<li>Limited opportunity to compare ratings and reviews of potential drivers.</li>
<li>Getting the information he requires or having trouble navigating app interfaces.</li>
<li>Paint Points:</li>
<li>Transparency issues or insufficient data on possible drivers.</li>
<li>During his ride, he had unpleasant or unsafe encounters as a result of the driver's poor choice.</li>
<li>Annoyance with program user interfaces or customer service when problems occur.</li>

<h1>Logo for our application</h1>
<img src="Carpooling logo.jpg">




    
  </body>
