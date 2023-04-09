
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
import Search from './Search/search.js';
import Driver from './Driver/Driver.js';
import DriverRide from './Driver/DriverCreateRide.js';
import './App.css';

import ExampleComponent from './example.js';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (

    <Router>
    <div className="App">
    <header className="App-header">
    {/* <Search/> */}
    
    {/* <Driver/> */}
    </header>
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
       </Router> 
       
 
  );
}

export default App;
