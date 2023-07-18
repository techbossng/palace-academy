import React from "react";
// import ReactDOM from 'react-dom';
import { Route, Routes  } from "react-router-dom";
import Navbar from "./components/NavbarFolder/Navbar";
import Home from "./components/HomeFolder/Home";
import Programs from "./components/ProgramsFolder/Programs";
import Videos from "./components/VideosFolder/YoutubeEmbed";
import Coaches from "./components/CoachesFolder/Coaches";
import Facilities from "./components/FacilitiesFolder/Facilities";
// import Schedule from './components/Schedule/Schedule';
import Registration from "./components/RegistrationFolder/Registration";
// import Contact from './components/Contact/Contact';
import Footer from "./components/FooterFolder/Footer";
import "./App.css"
import About from "./components/AboutFolder/About";
// import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
<>
      
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/programs" element={ <Programs />} />
        <Route path="/videos/$embedId" element={ <Videos />} />
        <Route path="/about" element={<About/>} />
        {/* <Route path="/signUp" element={<SignUp/>} /> */}
        <Route path="/registration" element={<Registration/>} />
      </Routes>
      <Footer />
    
</>
  );
};

export default App;
