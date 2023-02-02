import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
// import Jumbo from "./components/Jumbo";
// import Main from "./components/Main";
// import BigFoot from "./components/BigFoot";
// import LilFoot from "./components/LilFoot";
import {Route, Routes} from 'react-router-dom'
import HomePage from "./components/pages/main";
import About from "./components/pages/About";
import Unique from "./components/pages/Special";
import Contact from "./components/pages/Contact";
import Schedule from "./components/pages/Schedule";
import Register from "./components/pages/Register";



function App() {
  return(
  <div>
    <Navigation />
    <Routes>
      <Route exact path={'/Space-City-Debate-Camp'} element={ <HomePage /> } />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Unique" element={<Unique />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Schedule" element={<Schedule />} />
      <Route exact path="/Register" element={<Register />} />
    </Routes>
  </div>
  );
};

export default App;