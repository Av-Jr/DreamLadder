import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import "./About.scss"
import { Shield, Search, Briefcase, Handshake, TrendingUp, LayoutGrid, ChartColumn, MonitorSmartphone, Zap, Lock, Smartphone} from "lucide-react";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import React from 'react'

export default function About() {


    const WhyUsData =
        [
          {
            title: "Single View Portfolio",
            description: "Personal/family’s consolidated investment portfolio at one place to help easy tracking.",
            icon: LayoutGrid
          },
          {
            title: "Focus On Analysis",
            description: "Sound investment strategies through in-depth market analyses and algorithm-based assessments.",
            icon: ChartColumn
          },
          {
            title: "Portfolio Monitoring",
            description: "Regular review and monitoring of portfolio performance to enable informed decision making.",
            icon: MonitorSmartphone
          },
          {
            title: "Quick & Convenient",
            description: "Digital client onboarding, ease of transactions and faster execution within efficient timelines.",
            icon: Zap
          },
          {
            title: "Safety & Security",
            description: "State-of-the-art bank-grade security with multi-level verification of investments and transactions.",
            icon: Lock
          },
          {
            title: "Investments at Fingertip",
            description: "Access your wealth management tools and investment data anytime, anywhere through our mobile platform.",
            icon: Smartphone
          }
        ]
    
    const whyChooseData = [
      {
        icon: Search,
        text: "With a senior team of 20+ years in equity research, we provide expert insights and personalized investment strategies tailored for you."
      },

      {
        icon: Shield,
        text: "Trusted. Analysis-Driven: We use advanced financial tools to enhance performance, offering guidance that is simple and focused on your success."
      },

      {
        icon: TrendingUp,
        text: "Trust us to deliver the expertise and technology that empowers your financial success."
      }
    ];

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

    const teamIntro = {
      title: "Our Team",

      description:
        "A collective of experienced professionals driven by integrity, discipline, and long-term perspective — dedicated to facilitating structured wealth creation and continuity for families.",
    };

    const teamData = [
      {
        role: "FOUNDER & CEO",
        name: "Saday Sinha",
        description:
          "Saday Sinha is the Founder and CEO of DreamLadder Capital, a wealth management firm dedicated to helping clients achieve financial independence through tailored investment solutions. His approach is rooted in transparency and goal-oriented growth.",
        image: "AboutFifthPgSaday.png"
      },

      {
        role: "DIRECTOR",
        name: "Priyanka Mishra",
        description:
          "Priyanka Mishra serves as a Director at DreamLadder Capital, where she leads Financial Products, Operations, and New Initiatives divisions. She plays a pivotal role in driving innovation and ensuring operational excellence.",
        image: "AboutFifthPgPriyanka.png"
      },
    ];

    return (
        <div id={"About2MC"}>
            <NavBar></NavBar>
            <div className="firstPage">
                <span className={"main"}>
                    <span>"Wealth is not built overnight, its crafted through</span>
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

            <div className={"fifthPage"}>
                <div className="teamIntro">
                    <h1>{teamIntro.title}</h1>
                    <span>{teamIntro.description}</span>
                </div>
                {
                    teamData.map((item, index) => (
                        <div className={"MemberCard"}>
                            <img src={`/${item.image}`} alt="" className={"heroImg"}/>
                            <div className="heroText">
                                <h3>{item.role}</h3>
                                <h1>{item.name}</h1>
                                <span>{item.description}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="sixthPage">
                <div className="heroImg">
                    <h1>What helps us do well</h1>
                    <img src="/sixthPG.png" alt=""/>
                </div>
                <div className="heroText">
                    {
                        whyChooseData.map((item, index) => {
                            const Icon = item.icon;
                            const txt = item.text;
                            return(
                            <div className={'sixthPgCard'}>
                                <Icon className="PgCardSixth" size={40}></Icon>
                                <span>{txt}</span>
                            </div>
                        )})
                    }
                </div>
            </div>

            <div className="seventhPage">
                <h1>Why Us</h1>
                <div className="seventhCardCon">
                    {
                        WhyUsData.map((item, index) => {
                            const Icon = item.icon;

                            return(
                                <div className={"seventhCard"} key={index}>
                                    <div className={"desc"}>{item.description}</div>
                                    <Icon className={"cardIcon"} size={45}></Icon>
                                    <span>{item.title}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Ql></Ql>
        </div>
    )
}
