import "./StructProd.scss";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import {
  ShieldCheck,
  ChartColumn,
  Activity,
  Layers3
} from "lucide-react";

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

      <NavBar/>

      <div className={"headTit"}>
        <h1>{StructuredProductsHeroData.title}</h1>
      </div>

      <div className={"SPone"}>

        <div className={"heroText"}>

          {
            StructuredProductsHeroData.description.map((item, index) => (
              <span key={index}>{item.text}</span>
            ))
          }

          <span className={"quoteEle"}>
            {StructuredProductsHeroData.quote}
          </span>

        </div>

        <div className={"heroImg"}>
          <img
            src={`/${StructuredProductsHeroData.image}.png`}
            alt=""
          />
        </div>

      </div>

      <div className={"SPtwo"}>

        <h1>{StructuredProductsTypesData.title}</h1>

        <span>{StructuredProductsTypesData.description}</span>

        <div className={"cardsCont"}>

          {
            StructuredProductsTypesData.cards.map((item, index) => {

              const Icon = item.icon;

              return(
                <div className={"cardEle"} key={index}>

                  <div className={"cardTop"}>

                    <Icon/>

                    <h2>{item.title}</h2>

                  </div>

                  <p>{item.description}</p>

                </div>
              );
            })
          }

        </div>

      </div>

      <div className={"SPthree"}>

        <div className={"left"}>

          <h1>{StructuredProductsRegulationData.title}</h1>

          <div className={"line"}></div>

          <span>
            {StructuredProductsRegulationData.description}
          </span>

          <img
            src={`/${StructuredProductsRegulationData.image}.png`}
            alt=""
          />

        </div>

        <div className={"right"}>

          {
            StructuredProductsRegulationData.points.map((item, index) => (
              <div className={"pointEle"} key={index}>

                <h2>{`0${index + 1}`}</h2>

                <p>{item}</p>

              </div>
            ))
          }

          <span className={"quoteEle"}>
            {StructuredProductsRegulationData.quote}
          </span>

        </div>

      </div>

      <div className={"SPfour"}>

        <h1>{WhyStructuredProductsData.title}</h1>

        <span>
          {WhyStructuredProductsData.description}
        </span>

      </div>

      <Ql/>

    </div>
  );
};

export default StructProd;