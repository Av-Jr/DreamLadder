import "./StructProd.scss";
import {img} from "../../utils/image.js";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import {
  ShieldCheck,
  ChartColumn,
  Activity,
  Layers3
} from "lucide-react";
import React from "react";

const StructProd = () => {

  const StructuredProductsHeroData = {
    title: "Structured Products",

    image: "SPpgone",

    description: [
      {
        text:
          "Structured Products are customized investment solutions that combine traditional instruments like bonds with derivatives to offer unique risk-return outcomes."
      },

      {
        text:
          "They are designed to provide capital protection, enhanced returns, or market-linked growth, depending on an investor’s goals and risk appetite."
      }
    ],

    quote:
      "Structured products are typically issued by banks or financial institutions and distributed to eligible investors through regulated intermediaries such as DreamLadder Capital."
  };

  const StructuredProductsTypesData = {
    title: "Types of Structured Products",

    description:
      "Tailored investment solutions designed to provide optimized risk-reward profiles.",

    cards: [
      {
        title: "Capital-Protected Products",

        description:
          "Offer downside protection while participating in market upside through index or equity-linked returns.",

        icon: ShieldCheck
      },

      {
        title: "Non-Capital-Protected Products",

        description:
          "Higher return potential with proportional exposure to market movements; suitable for informed, higher-risk investors.",

        icon: ChartColumn
      },

      {
        title: "Fixed Income-Linked Notes",

        description:
          "Combine bond returns with optional derivative exposure to enhance yield while maintaining a predictable payout.",

        icon: Activity
      },

      {
        title: "Equity or Index-Linked Notes",

        description:
          "Returns are tied to the performance of specific stocks, indices, or baskets of securities.",

        icon: Layers3
      }
    ]
  };

  const StructuredProductsRegulationData = {
    title: "Regulatory Framework",

    image: "SPpgtwo",

    description:
      "Structured Products in India operate within a tightly regulated framework to ensure transparency, investor protection, and suitability-based distribution.",

    points: [
      "Governed by SEBI (Issue and Listing of Structured Products) Regulations and applicable SEBI (ICDR) Guidelines.",

      "Products issued by banks and NBFCs are additionally subject to RBI regulations governing issuance, risk management, and balance sheet exposure.",

      "Distribution is restricted to eligible investors, typically High-Net-Worth Individuals (HNIs), based on suitability assessment and risk profiling.",

      "Issuers and distributors must ensure complete disclosure of payoff structures, underlying risks, costs, and scenario outcomes prior to investment."
    ],

    quote:
      "This framework ensures structured products are offered only where they align with investor objectives, risk tolerance, and regulatory safeguards."
  };

  const WhyStructuredProductsData = {
    title: "Why Structured Products?",

    description:
      "They enable investors to achieve customized portfolio outcomes—balancing capital preservation, yield enhancement, or equity participation—within a regulated and transparent framework."
  };

  return (
    <div id={"StructuredProductsMC"}>
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Structured<br></br>Products</span>
      </div>

      <div className={"SPone"}>

        <div className={"heroText"}>

          {
            StructuredProductsHeroData.description.map((item, index) => (
              <span className={"Gen dark small"} key={index}>{item.text}</span>
            ))
          }

          <span className={"quote Gen small"}>
            {StructuredProductsHeroData.quote}
          </span>

        </div>

        <div className={"heroImg"}>
          <img loading="lazy"
            src={`${img(StructuredProductsHeroData.image)}`}
            alt=""
          />
        </div>

      </div>

      <div className={"SPtwo"}>
        <div className="innerSPtwo">
          <h2 className={"Gen dark"}>{StructuredProductsTypesData.title}</h2>

          <span className={"Gen light small"}>{StructuredProductsTypesData.description}</span>

          <div className={"cardsCont"}>

            {
              StructuredProductsTypesData.cards.map((item, index) => {

                const Icon = item.icon;

                return(
                    <div className={"cardEle"} key={index}>
                      <Icon className={"cardIcon"} size={30}/>
                      <div className={"textElll"}>
                        <h3 className={"Syn bold"}>{item.title}</h3>
                        <span className={"Gen light bold small"}>{item.description}</span>
                      </div>
                    </div>
                );
              })
            }

          </div>
        </div>

      </div>

      <div className={"SPthree"}>

        <div className={"left"}>

          <h2 className={"Gen bold"}>{StructuredProductsRegulationData.title}</h2>

          <div className={"line"}></div>

          <span className={"Gen dark small"}>
            {StructuredProductsRegulationData.description}
          </span>

          <img loading="lazy"
            alt=""
            src={`${img(StructuredProductsRegulationData.image)}`}
          />

        </div>

        <div className={"right"}>

          {
            StructuredProductsRegulationData.points.map((item, index) => (
              <div className={"pointEle"} key={index}>

                <span className={"Gen light small"}>{`0${index + 1}`}</span>

                <span className={"Gen dark small"}>{item}</span>

              </div>
            ))
          }

          <span className={"quote Gen small"}>
            {StructuredProductsRegulationData.quote}
          </span>

        </div>

      </div>

      <div className={"endingStatement"}>

        <h1>{WhyStructuredProductsData.title}</h1>

        <h2>
          {WhyStructuredProductsData.description}
        </h2>

      </div>

      <Ql/>

    </div>
  );
};

export default StructProd;