
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
//import { Button } from 'antd';
import Search from './Search/search.js';
import Driver from './Driver/Driver.js';
import DriverRide from './Driver/DriverCreateRide.js';
import RideMatch from './RideMatch/rideMatch';
import './App.css';

import ExampleComponent from './example.js';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (

    <Router>
    <div>
      
        <Link to='/DriverRide'>Post the Ride for the Commuters</Link>
      <Link to='/about'>about</Link>
      <Link to='/Home'>Home</Link>
      <Link to='/Search'>Search Ride</Link>
    </div>
      <Routes>
        <Route path="/DriverRide" element={<DriverRide />}/>
        <Route  path="/Home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/search" element={<Search/>} />
        
      </Routes>
       </Router> 
       
 
  );
}

export default App;
