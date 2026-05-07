import NavBar from "./LandingPage/1.NavBar/NavBar.jsx"
import SlideShow from "./LandingPage/2.SlideShow/SlideShow.jsx"
import About from "./LandingPage/3.About/About.jsx"
import Calculator from "./LandingPage/5.Calculator/Calculator.jsx";
import Pow from "./LandingPage/7.POW/Pow.jsx";
import Footer from "./LandingPage/8.Footers/Footer.jsx";
import ReturnSlider from "./LandingPage/4.ReturnSlider/ReturnSlider.jsx";
import Insights from "./LandingPage/6.Insights/Insights.jsx";
import Ql from "./LandingPage/9.QuickLinks/Ql.jsx";

import "./App.scss"



import React from 'react'

export default function Home() {
    return (
        <>
          <NavBar></NavBar>
          <div id = "AppMC">
                <SlideShow></SlideShow>
              <About></About>
              <ReturnSlider></ReturnSlider>
              <Calculator></Calculator>
              <Insights></Insights>
              <Pow></Pow>
              <Footer></Footer>
              <Ql></Ql>
          </div>
        </>
    )
}
