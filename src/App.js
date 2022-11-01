import React from 'react';
import './App.css';
import About from './components/Views/About';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import ServicePage from './components/ServicePage';
import Aboutpage from './components/Aboutpage';
import Blogpage from './components/Blogpage';
import Footer from './components/Footer';



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
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homepage style={style} />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<Blogpage />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
