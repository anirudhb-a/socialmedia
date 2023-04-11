// src/components/AboutPage.js
import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes ,Link } from 'react-router-dom';
>>>>>>> 3f8f2d0283a9077c3eab067a927ac8527db458a8

const AboutPage = () => {
  return (
    <div>
      <h1>About Page</h1>
      {/* Add content for the about page */}
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default AboutPage;
