import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import "./About.scss"
import { Shield, Search, Briefcase, Handshake } from "lucide-react";

import React from 'react'

export default function About() {

    const cardElesData = [
      {
        title: "Trusted Integrity",
        ts: "Upholding the highest ethical standards in every financial decision we make for you.",
        icon: Shield
      },

      {
        title: "Complete Transparency",
        ts: "Total clarity in our processes, direct investments, and clear reporting structures.",
        icon: Search
      },

      {
        title: "Professional Experience",
        ts: "Decades of institutional expertise applied to managing individual and family wealth.",
        icon: Briefcase
      },

      {
        title: "Collaborative Relationships",
        ts: "Partnering with families across generations to ensure a lasting financial legacy.",
        icon: Handshake
      }
    ]
    return (
        <div id={"About2MC"}>
            <NavBar></NavBar>
            <div className="firstPage">
                <span className={"main"}>
                    <span>"Wealth is not built overnight, its crafted through : </span>
                    <span className={'toEdit'}> Clarity, Courage and Consistency."</span>
                    <span className={"Intro"}>Mr. Saday Sinha<br/><span className={'title'}>CEO & Founder</span></span>
                 </span>
                <img src="/AboutSaday.png" alt=""/>
            </div>

            <div className="secondPage">
                <div className="text">
                    <h1>Our Story</h1><br/><br/>
                    <span>
                        Every great journey begins with a simple belief. Ours began in 2018 with the conviction that investing should be transparent, straightforward, and built on trust.<br/><br/>
                        What started as a focused effort in Mutual Funds has expanded into a comprehensive wealth management suite, including Corporate FDs, Protection Solutions, and Structured Products.<br/><br/>
                        Today, we serve over 500+ families across 12 countries, achieving milestones driven by the same purpose: helping people grow their wealth with clarity.<br/><br/>
                    </span>
                    <div className="toShow">
                        <span><span className={"changeC"}>25+</span><br/>YEARS EXPERTISE</span>
                        <span><span className={"changeC"}>500+</span><br/>FAMILIES SERVED</span>
                    </div>
                </div>
                <img src="/AboutTwo.png" alt=""/>
            </div>

            <div className="thirdPage">
                <div className={"textLeft"}>“Our mission is to be one of India’s most trusted partners in building long-term wealth. Every solution we create is designed to be simple, transparent, and effective.”</div>
                <div className={"Intro"}>- Mr. Saday Sinha<br/><span className={'title'}>Founder & CEO, DreamLadder Capital</span></div>
            </div>

            <div className="fourthPage">
                <h1>Our Core Values</h1>
                <div className="cardElesfP">
                    {
                        cardElesData.map((item, index) => {
                            const Icon = item.icon;
                            const Tit = item.title;
                            const Txt = item.ts;

                            return(
                                <div className={"cardEle"}>
                                    <Icon color={"#E53935"} size={40} className={"cardIcon"}></Icon>
                                    <h2>{Tit}</h2>
                                    <span>{Txt}</span>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}
