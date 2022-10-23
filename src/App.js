import React from 'react';
import './App.css';
import About from './components/Views/About';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Homepage from './components/Views/Homepage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
