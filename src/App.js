import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route

import BodyComponent from './components/body-component';

const App = () => {
  return (
    <Router>
      <Routes> {/* Use the Routes component */}
        <Route path="/page/:pageNumber" element={<BodyComponent />} />
        {/* Default route */}
        <Route path="/" element={<BodyComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
