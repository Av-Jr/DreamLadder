import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import "./About.scss"

import React from 'react'

export default function About() {
    return (
        <div id={"AboutMC"}>
            <NavBar></NavBar>
            <div className="firstPage">
                <span className={"main"}>
                    <span>"Wealth is not built overnight, its crafted through : </span>
                    <span className={'toEdit'}> Clarity,<br/>Courage and <br/>Consistency."</span>
                    <span className={"Intro"}>Mr. Saday Sinha<br/><span className={'title'}>CEO & Founder</span></span>
                 </span>
                <img src="/AboutSaday.png" alt=""/>
            </div>
        </div>
    )
}
