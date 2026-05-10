import "./PMSAIF.scss";

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
    "Mandatory SEBI Registration: All AIFs must be registered with SEBI.",

    "Minimum Investment Threshold: To ensure sophisticated participation, a minimum ticket size of ₹1 crore is required from investors.",

    "Leverage Restrictions: Category I & II AIFs cannot use leverage except for temporary needs; Category III can, within limits.",

    "Transparency & Disclosure: Fund managers must report performance, valuation, and risks transparently.",

    "Eligible Investor Profile: Participation is strictly limited to High-Net-Worth Individuals (HNIs) and Institutional Investors who meet the criteria."
  ]
};

const WhyAIFData = {
  title: "Why AIF?",

  description:
    "AIFs provide access to alternative assets and strategies that can enhance portfolio diversification, improve risk-adjusted returns, and unlock growth beyond traditional markets — all under a regulated, transparent framework."
};

  return (
    <div id={"PMSAIFMC"}>
      <NavBar />

      <div className="headTit">
        <h1>PMS / AIF</h1>
      </div>

      <div className="PMSone">
        <img
          className={"heroImg"}
          src={`/${PMSHeroData.image}.png`}
          alt=""
        />

        <div className="heroText">
          {PMSHeroData.description.map((item, index) => (
            <span className="descEles" key={index}>
              {item.text}
            </span>
          ))}

          <span className="quoteEle">
            {PMSHeroData.quote}
          </span>
        </div>
      </div>

      <div className="PMStwo">
        <div className="left">
          <h1>{PMSFeatureData.title}</h1>

          <span>{PMSFeatureData.description}</span>

          <img src={`/${PMSFeatureData.image}.png`} alt="" />
        </div>

        <div className="right">
          {
            PMSFeatureData.cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div className="featureCard" key={index}>
                  <h1>
                    <Icon className={"cardIcon"} size={32}/>
                    {item.title}
                  </h1>

                  <span>{item.description}</span>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="PMSthree">
        <div className="left">
          <h1>{PMSRegulationData.title}</h1>

          {
            PMSRegulationData.points.map((item, index) => (
              <div className="timelineCard" key={index}>
                <h2>{item.title}</h2>

                <span>{item.description}</span>
              </div>
            ))
          }
        </div>

        <div className="right">
          <span className="quoteEle">
            {PMSRegulationData.quote}
          </span>

          <img src={`/${PMSRegulationData.image}.png`} alt="" />
        </div>
      </div>

      <div className="endingStatement">

        <h1>{WhyPMSData.title}</h1>

        <span>
          {WhyPMSData.description}
        </span>

      </div>

      <div className="PMSfive">

        <div className="heroImg">
          <img src={`/${AIFIntroData.image}.png`} alt="" />
        </div>

        <div className="heroText">

          <h1>{AIFIntroData.title}</h1>

          {
            AIFIntroData.description.map((item, index) => (
              <span key={index}>
                {item.text}
              </span>
            ))
          }

          <span className="quoteEle">
            {AIFIntroData.quote}
          </span>

        </div>

      </div>

      <div className="PMSsix">

        <div className="left">
          {
            AIFTypesData.cards.map((item, index) => (
              <div className="aifCard" key={index}>

                <h1>
                  <span>{item.number}</span>
                  {item.title}
                </h1>

                <p>{item.description}</p>

                <div className="bottom">

                  <span>
                    <h3>OBJECTIVE</h3>
                    <p>{item.objective}</p>
                  </span>

                  <span>
                    <h3>EXAMPLES</h3>
                    <p>{item.examples}</p>
                  </span>

                </div>

              </div>
            ))
          }
        </div>

        <div className="right">
          <h1>{AIFTypesData.title}</h1>

          <span>
            SEBI classifies Alternative Investment Funds into three distinct categories based on investment objectives and asset classes.
          </span>

          <img src={`/${AIFTypesData.image}.png`} alt="" />
        </div>

      </div>

      <div className="PMSseven">

        <div className="left">
          <h1>{AIFRegulationData.title}</h1>

          <span>
            {AIFRegulationData.description}
          </span>

          <img src={`/${AIFRegulationData.image}.png`} alt="" />
        </div>

        <div className="right">
          {
            AIFRegulationData.points.map((item, index) => (
              <div className="regCard" key={index}>
                <h1>0{index + 1}</h1>

                <span>{item}</span>
              </div>
            ))
          }
        </div>

      </div>

      <div className="endingStatement">

        <h1>{WhyAIFData.title}</h1>

        <span>
          {WhyAIFData.description}
        </span>

      </div>


      <Ql />
    </div>
  );
}