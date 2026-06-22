import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import {useState, useEffect} from "react";
import "./About.scss"
import {
    Shield, Search, Briefcase, Handshake, TrendingUp, LayoutGrid, ChartColumn, MonitorSmartphone, Zap, Lock, Smartphone,
    Quote
} from "lucide-react";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import { img } from "../../utils/image.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import React from 'react'

export default function About() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {

        gsap.to(".progressLine", {
            scaleY: 1,
            ease: "none",

            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "bottom center",
                scrub: true
            }
        });

        gsap.utils.toArray(".timelineCard").forEach(card => {
            gsap.fromTo(
                card,
                {
                    opacity: 0,
                    y: 80
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        });

    }, []);

    const journeyData = [
        {
            year: "2018",
            title: "The Genesis",
            text: "DreamLadder Capital was founded with a single mission: to bring institutional discipline and structured wealth practices to individual families. Expanded into a boutique platform offering Corporate FD, Protection, and regulated PMS/AIF access."
        },

        {
            year: "2019",
            title: "Digital Expansion",
            text: "Launched our proprietary digital platform, enabling seamless wealth access for clients across India."
        },

        {
            year: "2021",
            title: "Global Footprint",
            text: "Expanded services to NRIs and global families, reaching clients across 10+ countries worldwide."
        },

        {
            year: "2023",
            title: "Wealth Suite",
            text: "Evolved into a boutique firm offering Corporate FDs, Protection Solutions, and PMS/AIF structures."
        },

        {
            year: "2025",
            title: "500+ Families",
            text: "Proudly managing long-term wealth strategies for over 500+ families across generations."
        }
    ];

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
            image: img("AboutFifthPgSaday")
        },

        {
            role: "DIRECTOR",
            name: "Priyanka Mishra",
            description:
                "Priyanka Mishra serves as a Director at DreamLadder Capital, where she leads Financial Products, Operations, and New Initiatives divisions. She plays a pivotal role in driving innovation and ensuring operational excellence.",
            image: img("AboutFifthPgPriyanka")
        },
    ];

    return (
        <div id={"About2MC"}>
            <NavBar></NavBar>
            <div className="firstPage">
                <div className="conSecFP">
                    <div className="section1">
                        <img
                            src={img("tree")}
                            alt="Contact"
                            loading="lazy"
                        />
                    </div>
                    <div className="section2">
                        <h2 className={"Syn"}>"Wealth is not built overnight; it’s crafted through<br/><span className={"redText Syn italic"}>clarity, courage, and consistency."</span></h2>
                        <h2 className={"Gen bold dark small"}>Mr. Saday Sinha</h2>
                        <span className={"Gen light small"}>FOUNDER & CEO</span>
                    </div>
                    <div className="section3">
                        <img
                            src={img("AboutSaday")}
                            alt="Contact"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <div className="secondPage">
                <div className="text innerPadding">
                    <h1 className={"Gen dark small"}>Our Story</h1><br/><br/>
                    <span className={"Gen dark small"}>
                        Every great journey begins with a simple belief. Ours began in 2018 with the conviction that investing should be transparent, straightforward, and built on trust.<br/><br/>
                        What started as a focused effort in Mutual Funds has expanded into a comprehensive wealth management suite, including Corporate FDs, Protection Solutions, and Structured Products.<br/><br/>
                        Today, we serve over 500+ families across 12 countries, achieving milestones driven by the same purpose: helping people grow their wealth with clarity.<br/><br/>
                    </span>
                    <div className="toShow">
                        <span className={"changeC Gen bold"}>25+<br/><span className={"Gen small light"}>YEARS EXPERTISE</span></span>
                        <span className={"changeC Gen bold"}>500+<br/><span className={"Gen small light"}>FAMILIES SERVED</span></span>
                    </div>
                </div>
                <img loading="lazy" src={img("AboutTwo")} alt=""/>
            </div>

            <div className="thirdPage">
                <div className="conSecTP innerPadding">
                    <Quote size={48} color="#E53935" />
                    <span className={"textLeft Syn italic"}>“Our mission is to be one of India’s most trusted partners in building long-term wealth. Every solution we create is designed to be simple, transparent, and effective.”</span>
                    <h2 className={"Gen small bold"}>- Mr. Saday Sinha<br/><span className={'Gen small'}>Founder & CEO, DreamLadder Capital</span></h2>
                </div>

            </div>

            <div className="journeyPage">

                <h1>Our Journey</h1>

                <div className="timeline">

                    <div className="progressLine"></div>

                    {journeyData.map((item, index) => (

                        <div
                            key={index}
                            className={`timelineItem ${
                                index % 2 === 0 ? "left" : "right"
                            }`}
                        >

                            <div className="year">
                                <span className={"yt"}>YEAR</span>
                                <span className={"yy"}>{item.year}</span>
                            </div>

                            <div className="dot"></div>

                            <div className={`timelineCard ${index % 2 !== 0 ? "" : "rightHead"}`}>
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>

                        </div>

                    ))}

                </div>

            </div>

            <div className="fourthPage">
                <div className="conSecFoP innerPadding">
                    <h1 className={"Gen"}>Our Core Values</h1>
                    <div className="cardElesfP">
                        {
                            cardElesData.map((item, index) => {
                                const Icon = item.icon;
                                const Tit = item.title;
                                const Txt = item.ts;

                                return(
                                    <div className={`cardEle`}>
                                        <Icon size={45} className={"cardIcon"}></Icon>
                                        <h2 className={"Syn small"}>{Tit}</h2>
                                        <span className={"Gen small light"}>{Txt}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <div className="fifthPage">

                <div className="teamIntro">
                    <h1 className="Gen">{teamIntro.title}</h1>
                    <span className={"lineRed"}></span>
                    <span className={"Gen light small"}>{teamIntro.description}</span>
                </div>

                <div className="teamMembers">
                    {
                        teamData.map((item, index) => (
                            <div className={"memC"} key={index}>
                                <div className="heroImg">
                                    <img
                                        loading="lazy"
                                        className="sideImg"
                                        src={item.image}
                                        alt=""
                                    />
                                </div>

                                <div className="heroText">
                                    <h2 className={"redText Gen small bold"}>{item.role}</h2>
                                    <h1 className={"Gen bold small"}>{item.name}</h1>
                                    <span className={"Gen small bold desc"}>{item.description}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className="sixthPage innerPadding">
                <div className="heroImg">
                    <h1 className={"Gen"}>What helps us do well</h1>
                    <span className={"lineRed"}></span>
                    <img loading="lazy" src={img("sixthPG")} alt=""/>
                </div>
                <div className="heroText">
                    {
                        whyChooseData.map((item, index) => {
                            const Icon = item.icon;
                            const txt = item.text;
                            return(
                                <div className={'sixthPgCard innerPadding'}>
                                    <Icon className="cardIcon" size={40}></Icon>
                                    <span className={"Gen small dark"}>{txt}</span>
                                </div>
                            )})
                    }
                </div>
            </div>



            <Ql></Ql>
        </div>
    )
}