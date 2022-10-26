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
const style = {
  backgroundColor: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:' 1320px',
  margin:' 0 auto',

}
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage style={style} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
