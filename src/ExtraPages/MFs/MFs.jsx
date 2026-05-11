import "./MFs.scss";
import {
  BriefcaseBusiness,
  Layers3,
  Zap,
  Wallet,
  Search,
    SquareCheckBig
} from "lucide-react";

import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";

import React from 'react'

export default function MFs() {

const MFHeroData = {
  title: "Mutual Funds",

  image: "MFpg1",

description: [
  {
    text: "Mutual Funds are investment vehicles that pool money from investors and allocate it across various asset classes such as equity, debt, and hybrid instruments."
  },

  {
    text: "These funds are managed by qualified professionals who follow a defined investment objective and strategy."
  }
],

  quote:
    "Mutual Funds offer a simple and structured way to participate in the financial markets with the benefit of diversification and disciplined investing."
};

const MFBenefitsData = {
  title: "Why Invest in Mutual Funds?",

  description:
    "A mutual fund is a professionally managed investment vehicle that pools money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. Investors in mutual funds can earn returns in the following ways:",

  image: "MFpg2",

  cards: [
    {
      title: "Professional Management",

      description:
        "Experienced fund managers handle research, selection, and monitoring of the portfolio.",

      icon: BriefcaseBusiness
    },

    {
      title: "Diversification",

      description:
        "Your investment is spread across multiple securities, helping reduce the impact of market volatility.",

      icon: Layers3
    },

    {
      title: "Flexibility",

      description:
        "Choose from a wide range of fund categories based on your goals and risk appetite.",

      icon: Zap
    },

    {
      title: "Accessibility",

      description:
        "Start with smaller amounts through SIPs or lumpsum investments.",

      icon: Wallet
    },

    {
      title: "Transparency",

      description:
        "Regular disclosures and portfolio updates help you stay informed.",

      icon: Search
    }
  ]
};

const MFInvestorData = {

  icon: SquareCheckBig,

  title: "Who Should Invest?",

  image: "MFpg6",

  quote:
    "Mutual Funds can suit a wide range of investors, depending on their financial objectives, investment horizon, and risk appetite.",

  points: [
    "Individuals seeking long-term capital appreciation or regular income.",

    "First-time investors looking for a structured entry into financial markets.",

    "Working professionals and families planning for key life milestones.",

    "Investors who prefer a regulated, transparent, and professionally managed investment route.",

    "Those looking to diversify across asset classes through a single investment vehicle.",

    "Investors seeking goal-aligned allocation based on risk profile and time horizon."
  ]
};

const MFAssistData = {
  title: "How We Assist",

  image: "MFpg4",

  steps: [
    {
      step: "1",
      title: "Structured Asset Allocation",

      description:
        "We facilitate allocation across suitable fund categories based on your risk profile, financial goals, and investment horizon."
    },

    {
      step: "2",
      title: "Disciplined Evaluation Framework",

      description:
        "Investment options are assessed through a structured framework considering consistency, risk parameters, and suitability factors."
    },

    {
      step: "3",
      title: "Seamless Execution",

      description:
        "We coordinate documentation and transaction processes to ensure smooth and efficient investment execution."
    },

    {
      step: "4",
      title: "Periodic Portfolio Reviews",

      description:
        "We conduct periodic portfolio reviews to help ensure continued alignment with evolving financial objectives."
    }
  ]
};

    return (
        <div id={"MFsMC"}>
            <NavBar></NavBar>
            <div className="headTit"><h1>Mutual-Funds</h1></div>

            <div className="MFone">
                <img loading="lazy" className={"heroImg"} src={`/${MFHeroData.image}.webp`} alt=""/>
                <div className="heroText">
                    {MFHeroData.description.map((item, index) => (
                        <span className="descEles" key={index}>{item.text}</span>
                    ),
                    )}
                    <span className="quoteEle">
                        {MFHeroData.quote}
                    </span>
                </div>
            </div>

            <div className="MFtwo">
                <h1 className="titleHead">{MFBenefitsData.title}</h1>
                <span className="titleDesc">{MFBenefitsData.description}</span>
                <div className="twoMC">
                    <img loading="lazy" src={`/${MFBenefitsData.image}.webp`} alt=""/>
                    <div className="heroText">
                        {
                            MFBenefitsData.cards.map((item, index) =>{
                                const Icon = item.icon;
                              return (
                                <div className={'MFtwoCards'} key={index}>
                                    <h1><Icon className={"cardIconMF"}/>{item.title}</h1>
                                    <span>{item.description}</span>
                                </div>
                            )})
                        }
                    </div>
                </div>
            </div>

            <div className="MFthree">
                <div className="heroImg">
                    <img loading="lazy" src={`/${MFInvestorData.image}.webp`} alt=""/>
                    <h1>{MFInvestorData.quote}</h1>
                </div>

                <div className="heroText">
                    <h1>{MFInvestorData.title}</h1>
                    {
                        MFInvestorData.points.map((item, index) => {
                            const Icon = MFInvestorData.icon;

                            return(
                                <span key={index}><Icon className={"threeIcon"}/>  {item}</span>
                            )
                        })
                    }
                </div>
            </div>

            <div className="MFfour">
                <div className="heroText">
                    <h1>{MFAssistData.title}</h1>
                    <div className="AssistDataCardCon">
                        {
                            MFAssistData.steps.map((item, index) => (
                                <div className={"ADC"}>
                                    <h1>{item.step}. </h1>
                                    <span>
                                        <h1>{item.title}</h1>
                                        <span>{item.description}</span>
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <img loading="lazy" src="/MFpg7.jpg" alt=""/>
            </div>

            <div className={"endingStatement"}>
                <h1>Why Through Us ?</h1>
                <span>Investing is made easy with our automated digital platform, while our expert fund selection, personalized advice, and active monitoring keep your portfolio smarter, safer, and goal-driven.</span>
            </div>
            <Ql></Ql>
        </div>
    )
}
