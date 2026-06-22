import "./Bonds.scss";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import { img } from "../../utils/image.js";
import React from "react";

const Bonds = () => {

const BondsHeroData = {
  title: "Bonds",

  image: "Bondspgone",

  description: [
    {
      text:
        "Bonds are fixed-income instruments through which governments, banks, and companies raise capital."
    },

    {
      text:
        "They offer predictable interest payouts, capital stability, and diversification, making them suitable for conservative to moderate-risk investors."
    }
  ],

  quote:
    "Bonds offer steady income, lower volatility, portfolio diversification, and transparent regulation — making them essential for balanced wealth planning."
};

const BondsRegulationData = {
  title: "Regulatory Framework",

  image: "Bondspgtwo",

  quote:
    "Investable bonds in India are governed by a multi-layered regulatory structure designed to ensure market integrity and investor security.",

  points: [
    {
      title: "SEBI Debt Regulations",

      description:
        "Governed by SEBI (Issue and Listing of Debt Securities) Regulations, 2008 for strict disclosure standards."
    },

    {
      title: "RBI Oversight",

      description:
        "The Reserve Bank of India regulates Government Securities, SGBs, and bank-issued AT1 bonds."
    },

    {
      title: "Credit Rating Mandate",

      description:
        "Mandatory ratings by SEBI-regulated agencies are required for corporate bonds to signal creditworthiness."
    },

    {
      title: "Investor Safeguards",

      description:
        "Strict KYC, Suitability Norms, and mandatory disclosure of Credit, Interest Rate, and Liquidity risks."
    }
  ]
};

const WhyBondsData = {
  title: "Why Invest in Bonds",

  description:
    "Bonds offer steady income, lower volatility, portfolio diversification, and transparent regulation — making them essential for balanced wealth planning."
};

const FixedIncomeIntroData = {
  title: "Investable Fixed Income Instruments",

  image: "Bondspgthree",

  description: [
    {
      text:
        "Fixed income products provide predictable returns through interest payments while helping preserve capital."
    },

    {
      text:
        "Governments, financial institutions, and corporations issue these instruments to raise funds."
    }
  ],

  quote:
    "Fixed Income Instruments are ideal for conservative to moderate-risk investors seeking stability, steady cash flows, and diversification."
};

const FixedIncomeTypesData = {
  title: "Types of Fixed Income Instruments",

  description:
    "A multi-layered regulatory structure designed to ensure market integrity and investor security.",

  image: "Bondspgfour",

  cards: [
    {
      number: "01",

      title: "Government Securities",

      description:
        "Safest fixed income option issued by the Govt of India."
    },

    {
      number: "02",

      title: "State Development Loans",

      description:
        "Issued by state governments with slightly higher yields."
    },

    {
      number: "03",

      title: "Tax-Free Bonds",

      description:
        "Interest is exempt under Section 10(15) for tax efficiency."
    },

    {
      number: "04",

      title: "Corporate Bonds",

      description:
        "Funding for companies ranging from AAA to high-yield."
    },

    {
      number: "05",

      title: "Sovereign Gold Bonds",

      description:
        "Linked to gold prices with a fixed interest component."
    },

    {
      number: "06",

      title: "Perpetual & AT1 Bonds",

      description:
        "High-yield bank tools with loss-absorption features."
    }
  ]
};

const WhyFixedIncomeData = {
  title: "Why Allocate to Fixed Income?",

  image: "Bondspgfive",

  quote:
    "They form the backbone of balanced wealth planning, helping manage risk effectively while generating steady, predictable returns.",

  points: [
    "Predictable and stable income",

    "Lower volatility compared to equities",

    "Capital preservation",

    "Diversification benefits",

    "Transparent and regulated investments"
  ]
};

return (
<div id={"BondsMC"}>
    <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Bonds</span>
    </div>

    <div className="Bondsone">

        <div className="heroText">
            {
                BondsHeroData.description.map((item, index) => (
                    <span className={"Gen dark small bold"} key={index}>
                        {item.text}
                    </span>
                ))
            }

            <span className={"Gen quote small"}>
                {BondsHeroData.quote}
            </span>

        </div>

        <div className="heroImg">
            <img loading="lazy" src={img(BondsHeroData.image)} alt=""/>
        </div>

    </div>

    <div className="Bondstwo">

        <div className="left">

            <h2 className={"Gen bold"}>{BondsRegulationData.title}</h2>

            {
                BondsRegulationData.points.map((item, index) => (
                    <div className={"timelineCard"} key={index}>
                        <h3 className={"Syn dark small"}>{item.title}</h3>
                        <span className={"Gen light small"}>{item.description}</span>
                    </div>
                ))
            }

        </div>

        <div className="right">

            <span className={"quote Gen small"}>
                {BondsRegulationData.quote}
            </span>

            <img loading="lazy" src={img(BondsRegulationData.image)} alt=""/>

        </div>

    </div>

    <div className="endingStatement">

        <h1>{WhyBondsData.title}</h1>

        <h2>{WhyBondsData.description}</h2>

    </div>

    <div className="Bondsfour">

        <div className="heroImg">
            <img loading="lazy" src={img(FixedIncomeIntroData.image)} alt=""/>
        </div>

        <div className="heroText">

            <h2 className={"Gen bold"}>{FixedIncomeIntroData.title}</h2>

            {
                FixedIncomeIntroData.description.map((item, index) => (
                    <span className={"Gen light small"} key={index}>
                        {item.text}
                    </span>
                ))
            }

            <span className={"quote Gen small"}>
                {FixedIncomeIntroData.quote}
            </span>

        </div>

    </div>

    <div className="Bondsfive">

        <div className="conSecBF">
            <h2 className={"Syn"}>{FixedIncomeTypesData.title}</h2>
            <span className={"Gen light"}>{FixedIncomeTypesData.description}</span>

            <div className="middleSection">

                <div className="leftBonds">

                    {
                        FixedIncomeTypesData.cards.slice(0,3).map((item, index) => (
                            <div className={`typeCard ${index % 2 !== 0 ? "start" : "end"}`} key={index}>

                                <h3 className={"Gen dark bold"}>
                                    <span className={"Gen bold"}>{item.number}</span> {item.title}
                                </h3>

                                <span className={"Gen small"}>{item.description}</span>

                            </div>
                        ))
                    }

                </div>

                <div className="centerImg">
                    <img loading="lazy" src={img(FixedIncomeTypesData.image)} alt=""/>
                </div>

                <div className="rightBonds">

                    {
                        FixedIncomeTypesData.cards.slice(3,6).map((item, index) => (
                            <div className={`typeCard ${index % 2 !== 0 ? "end" : ""}`} key={index}>

                                <h3 className={"Gen bold"}>
                                    <span className={"Gen bold"}>{item.number}</span> {item.title}
                                </h3>

                                <span className={"Gen small"}>{item.description}</span>

                            </div>
                        ))
                    }

                </div>

            </div>
        </div>

    </div>

    <div className="Bondssix">

        <div className="left">

            <img loading="lazy" src={img(WhyFixedIncomeData.image)} alt=""/>

            <span className={"quote Gen small"}>
                {WhyFixedIncomeData.quote}
            </span>

        </div>

        <div className="right">

            <h2 className={"Gen dark bold"}>{WhyFixedIncomeData.title}</h2>

            <div className="line"></div>

            <h3 className={"Gen dark"}>Fixed income products play a pivotal role in a well-constructed portfolio by offering:</h3>

            {
                WhyFixedIncomeData.points.map((item, index) => (
                    <span className={"Gen dark small"} key={index}>
                        {index + 1}. {item}
                    </span>
                ))
            }

        </div>

    </div>

    <Ql />

</div>
);
};

export default Bonds;