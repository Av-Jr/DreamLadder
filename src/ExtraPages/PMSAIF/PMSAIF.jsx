import "./PMSAIF.scss";
import {img} from "../../utils/image.js";

import {
  UserRoundCog,
  ChartColumn,
  BriefcaseBusiness,
  ShieldCheck,
    SquareCheckBig
} from "lucide-react";

import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";

import React from "react";

export default function PMSAIF() {

const PMSHeroData = {
  title: "PMS / AIF",

  image: "PMSpgone",

  description: [
    {
      text:
        "Portfolio Management Services (PMS) offer investors a professionally managed, customized equity and debt portfolio."
    },

    {
      text:
        "Unlike mutual funds, PMS accounts (stocks) are held in the investor’s name, providing higher transparency, flexibility, and personalized strategy aligned with your financial goals and risk profile."
    }
  ],

  quote:
    "Portfolio Management Services (PMS) provide an elite investment framework where high-conviction strategies meet personalized direct ownership, ensuring your wealth is managed with surgical precision."
};

const PMSFeatureData = {
  title: "Key Features",

  description:
    "AIFs in India operate under the SEBI (Alternative Investment Funds) Regulations, 2012, ensuring a sophisticated environment for private capital.",

  image: "PMSpgtwo",

  cards: [
    {
      title: "Structured Mandate",

      description:
        "Each AIF operates under a defined investment objective and strategy as outlined in its scheme documents.",

      icon: UserRoundCog
    },

    {
      title: "Periodic Reporting",

      description:
        "Investors receive periodic updates and disclosures from the respective fund manager in accordance with regulatory requirements.",

      icon: ChartColumn
    },

    {
      title: "Professional Fund Management",

      description:
        "Investment decisions are undertaken by the designated fund manager in line with the fund’s stated mandate and regulatory framework.",

      icon: BriefcaseBusiness
    },

    {
      title: "Private Capital Access",

      description:
        "AIFs provide access to alternative investment opportunities such as private equity, venture capital, structured debt, or other specialized strategies.",

      icon: ShieldCheck
    }
  ]
};

const PMSRegulationData = {
  title: "SEBI-Regulated Framework",

  quote:
    "PMS in India is governed by the SEBI (Portfolio Managers) Regulations, 2020, ensuring transparency and investor protection through strict compliance standards.",

  image: "gg",

  points: [
    {
      title: "Minimum Investment",

      description:
        "₹50 Lakh initial ticket size as per strictly mandated SEBI guidelines."
    },

    {
      title: "Separate Custody",

      description:
        "Client assets are held securely in the investor’s individual demat and bank accounts."
    },

    {
      title: "Disclosure Norms",

      description:
        "Managers must provide periodic performance reports and transparent expense disclosures."
    },

    {
      title: "Regulatory Registration",

      description:
        "Every PMS provider is registered with SEBI and follows rigorous compliance audits."
    }
  ]
};

const WhyPMSData = {
  title: "Why PMS?",

  description:
    "Ideal for high-net-worth investors seeking a customized, actively managed portfolio with long-term wealth creation potential under a regulated, transparent framework."
};

const AIFIntroData = {
  title: "Alternative Investment Funds",

  image: "PMSpgthree",

  description: [
    {
      text:
        "Alternative Investment Funds (AIF) are privately pooled investment vehicles that collect funds from investors to invest in assets beyond traditional equity and debt instruments."
    },

    {
      text:
        "They are ideal for sophisticated investors seeking diversified, high-growth, and long-term strategies managed by professional fund managers."
    }
  ],

  quote:
    "AIFs offer a structured path to alternative asset classes with the benefit of expert management and high-conviction strategies."
};

const AIFTypesData = {
  title: "Types of AIF",

  image: "PMSpgfour",

  description: "SEBI classifies Alternative Investment Funds into three distinct categories based on their investment objectives and target asset classes. Each category serves specific investor needs, ranging from social impact and infrastructure to complex trading strategies.",
  cards: [
    {
      number: "01",

      title: "Category I AIF",

      description:
        "Invests in early-stage ventures, startups, social ventures, or infrastructure.",

      objective:
        "Promote entrepreneurship and economic growth.",

      examples:
        "Venture Capital, Angel & Infrastructure Funds"
    },

    {
      number: "02",

      title: "Category II AIF",

      description:
        "Invests in equity or debt instruments not covered under Category I or III.",

      objective:
        "Long-term capital appreciation.",

      examples:
        "Private Equity & Debt Funds"
    },

    {
      number: "03",

      title: "Category III AIF",

      description:
        "Uses leveraged strategies to generate short- to medium-term returns.",

      objective:
        "Absolute return through trading and arbitrage.",

      examples:
        "Hedge & Long-Short Funds"
    }
  ]
};

  const AIFRegulationData = {
    title: "Regulatory Framework",

    image: "PMSpgfive",

    description:
        "AIFs in India operate under the SEBI (Alternative Investment Funds) Regulations, 2012, ensuring a sophisticated environment for private capital.",

    points: [
      {
        title: "Mandatory SEBI Registration",
        description: "All AIFs must be registered with SEBI."
      },

      {
        title: "Minimum Investment Threshold",
        description:
            "To ensure sophisticated participation, a minimum ticket size of ₹1 crore is required from investors."
      },

      {
        title: "Leverage Restrictions",
        description:
            "Category I & II AIFs cannot use leverage except for temporary needs; Category III can, within limits."
      },

      {
        title: "Transparency & Disclosure",
        description:
            "Fund managers must report performance, valuation, and risks transparently."
      },

      {
        title: "Eligible Investor Profile",
        description:
            "Participation is strictly limited to High-Net-Worth Individuals (HNIs) and Institutional Investors who meet the criteria."
      }
    ]
  };

const WhyAIFData = {
  title: "Why AIF?",

  description:
    "AIFs provide access to alternative assets and strategies that can enhance portfolio diversification, improve risk-adjusted returns, and unlock growth beyond traditional markets — all under a regulated, transparent framework."
};

  return (
    <div id={"PMSAIFMC"}>
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">PMS / AIF</span>
      </div>

      <div className="PMSone">
        <div className="heroText">
          {PMSHeroData.description.map((item, index) => (
              <span className="Gen small dark" key={index}>
              {item.text}
            </span>
          ))}
          <span className={"quote Gen small"}>{PMSHeroData.quote}</span>
        </div>

        <img loading="lazy"
             className={"heroImg"}
             src={`${img(PMSHeroData.image)}`}
             alt=""
        />
      </div>

      <div className="PMStwo">
        <div className="innerPMStwo">
          <div className="left">
            <h2 className={"Gen bold"}>{PMSFeatureData.title}</h2>

            <span className={"Gen small light"}>{PMSFeatureData.description}</span>

            <img loading="lazy" src={`${img(PMSFeatureData.image)}`} alt="" />
          </div>

          <div className="right">
            {
              PMSFeatureData.cards.map((item, index) => {
                const Icon = item.icon;

                return (
                    <div className="featureCard" key={index}>
                      <Icon className={"cardIcon"} size={32}/>
                      <div className={"textElePMStwo"}>
                        <h3 className={"Gen bold"}>{item.title}</h3>
                        <span className={"Gen small light"}>{item.description}</span>
                      </div>
                    </div>
                );
              })
            }
          </div>
        </div>
      </div>

      <div className="PMSthree">

        <div className="left">

          <h2 className={"Gen bold"}>{PMSRegulationData.title}</h2>

          <div className="RegTimeline">

            {PMSRegulationData.points.map((item, index) => (
                <div
                    className="RegItem"
                    key={index}
                >

                  <div className="diamond"></div>

                  <div className="stepContent">
                    <h2 className={"Syn small"}>{item.title}</h2>
                    <span className={"Gen light small"}>{item.description}</span>
                  </div>

                </div>
            ))}

          </div>

        </div>

        <div className="right">

    <span className="quote Gen small">
      {PMSRegulationData.quote}
    </span>

          <img
              loading="lazy"
              src={`${img(PMSRegulationData.image)}`}
              alt=""
          />

        </div>

      </div>

      <div className="endingStatement">

        <h1>{WhyPMSData.title}</h1>

        <h2>
          {WhyPMSData.description}
        </h2>

      </div>

      <div className="PMSfive">

        <div className="heroImg">
          <img loading="lazy" src={`${img(AIFIntroData.image)}`} alt="" />
        </div>

        <div className="heroText">

          <h2 className={"Gen bold"}>{AIFIntroData.title}</h2>

          {
            AIFIntroData.description.map((item, index) => (
                <span className={"Gen small light"} key={index}>
          {item.text}
        </span>
            ))
          }

          <span className="quote Gen small">
      {AIFIntroData.quote}
    </span>

        </div>

      </div>

      <div className="PMSsix">

        <div className="left">
          {
            AIFTypesData.cards.map((item, index) => (
                <div className="aifCard" key={index}>
                  <div className="firstRow">
                    <span className={"Gen dark small bold"}>{item.number}</span>
                    <h2 className={"Syn small"}>{item.title}</h2>
                  </div>

                  <span className={'Gen light small'}>{item.description}</span>

                  <div className="thirdRow">

                    <div className={"it"}>
                      <h3 className={"Gen dark"}>OBJECTIVE</h3>
                      <span className={"Gen italic light small"}>{item.objective}</span>
                    </div>

                    <div className={"it"}>
                      <h3 className={"Gen dark"}>EXAMPLES</h3>
                      <span className={"Gen light small"}>{item.examples}</span>
                    </div>

                  </div>

                </div>
            ))
          }
        </div>

        <div className="right">
          <h2 className={"Gen dark bold"}>{AIFTypesData.title}</h2>

          <span className={"Gen light small"}>
      SEBI classifies Alternative Investment Funds into three distinct categories based on investment objectives and asset classes. Each category serves specific investor needs, ranging from social impact and infrastructure to complex trading strategies.
    </span>

          <img loading="lazy" src={`${img(AIFTypesData.image)}`} alt="" />
        </div>

      </div>

      <div className="PMSseven">

        <div className="left">
          <h2 className={"Gen bold dark"}>{AIFRegulationData.title}</h2>

          <span className={"Gen light small"}>
      {AIFRegulationData.description}
    </span>

          <img loading="lazy" src={`${img(AIFRegulationData.image)}`} alt="" />
        </div>

        <div className="rightPMS">
          {
            AIFRegulationData.points.map((item, index) => (
                <div className="regCard" key={index}>
                  <span className={"Syn light small"}>0{index + 1}</span>
                  <div className="eleregCard">
                    <h3 className="Gen dark bold">{item.title} : </h3>
                    <span className={"Gen light small"}>{item.description}</span>
                  </div>
                </div>
            ))
          }
        </div>

      </div>

      <div className="endingStatement">

        <h1>{WhyAIFData.title}</h1>

        <h2>
          {WhyAIFData.description}
        </h2>

      </div>


      <Ql />


    </div>
  );
}