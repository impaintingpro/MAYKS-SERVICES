import 'animate.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar";
import Hero from "./components/hero";
import Services1 from "./components/services-1";
import Services2 from "./components/services-2";
import AboutUs from "./components/aboutus";
import WhyChoseUs from "./components/whychoseus";
import ContactUs from "./components/contactus";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const App = () => {
  return(
    <Router>
      <div>
        <Routes>
          {/* The default route for the main landing page */}
          <Route path="/" element={
            <>
              <Nav />
              <Hero />
              <Services1 />
              <Services2 />
              <AboutUs />
              <WhyChoseUs />
              <ContactUs />
            </>
          } />

          {/* The route for the UploadPage */}
          {/* <Route path="/uploadingpage" element={<UploadPage />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App;