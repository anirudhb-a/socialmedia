
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from 'antd';
=======

>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8
import Search from './Search/search.js';
import Driver from './Driver/Driver.js';
import DriverRide from './Driver/DriverCreateRide.js';
import './App.css';

import ExampleComponent from './example.js';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
<<<<<<< HEAD
=======
import Payment from './Payment/payment.js'
>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8

function App() {
  return (

<<<<<<< HEAD
    <Router>
    <div>
      <Button>
        <Link to='/DriverRide'>Post the Ride for the Commuters</Link>
      </Button>
      <Link to='/about'>about</Link>
      <Link to='/Home'>Home</Link>
      <Button>
      <Link to='/Search'>Search Ride</Link>
      </Button>
    </div>
      <Routes>
        <Route path="/DriverRide" element={<DriverRide />}/>
        <Route exact path="/Home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
       </Router> 
=======
/*     <Router>
    <div className="App">
    <header className="App-header">
    {/* <Search/> }
    
    {/* <Driver/> }
   /*  </header>
    <DriverRide/>
    </div>
    <div>
      <Link to='/ExampleComponent'>hello please click here</Link>
      <Link to='/about'>about</Link>
      <Link to='/Home'>Home</Link>
      </div>
      <Routes>
        <Route path="/ExampleComponent" element={<ExampleComponent />}/>
        <Route exact path="/Home" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
       </Router>  */ 
       <div className="App">
    <header className="App-header">

      <Search/>
    
      <Driver/>
      <Payment/>

    </header>

    </div>
>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8
       
 
  );
}

export default App;
