import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutPage/AboutUs";
import ContactUs from "./components/ContactPage/ContactUs";
import { useEffect,useState } from "react";
import ReactPlayer from 'react-player'
import Teacher from "./components/ProfilePage/Teachers";

function App() {
  
  useEffect(()=>{
    var audio = document.getElementsByTagName('audio')[0];
    let promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(_ => {
          // autoplay started
        })
        .catch(err => {
    
          console.info(err)
          window.addEventListener('click',()=>{
            audio.play()
          },{once:true})
        })
    }
    
  },[])
  return(
    <div className="App">
      <audio autoPlay src={``}>

      </audio>
      
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/contact' element={<ContactUs />}></Route>
        <Route exact path='/teacher' element={<Teacher />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
