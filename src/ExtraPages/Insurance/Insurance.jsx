import "./Insurance.scss";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import {
  HeartPulse,
  Shield,
  Wallet,
  Users
} from "lucide-react";
import React from "react";
import { img } from "../../utils/image.js";

const Insurance = () => {

  const InsuranceHeroData = {
    title: "Insurance",

    image: img("INSpgone"),

    description: [
      {
        text:
          "Insurance is a financial safety net that protects individuals and families against life, health, property, and income-related risks."
      },

      {
        text:
          "It ensures financial security during unforeseen events while supporting long-term planning and wealth preservation."
      }
    ],

    strategicSignificance:
      "Comprehensive Insurance Strategies provide a vital safety net where tailored coverage meets robust risk management, ensuring your family’s financial future is protected with absolute certainty."
  };

  const InsuranceTypesData = {
    title: "Types of Insurance Products",

    description:
      "Tailored protection plans designed to safeguard your family and assets against life’s uncertainties.",

    cards: [
      {
        title: "Life Insurance",

        description:
          "Provides financial protection to dependents via Term Plans, Endowment Plans, ULIPs, and Whole Life Policies.",

        icon: Users
      },

      {
        title: "Health Insurance",

        description:
          "Covers medical expenses and hospitalization through Individual, Family Floater, and Critical Illness Plans.",

        icon: HeartPulse
      },

      {
        title: "General Insurance",

        description:
          "Comprehensive coverage for non-life risks including motor, home, travel, and commercial assets.",

        icon: Shield
      },

      {
        title: "Pension / Annuity Plans",

        description:
          "Strategic retirement solutions designed to provide a guaranteed and steady income stream post-retirement.",

        icon: Wallet
      }
    ]
  };

  const InsuranceRegulationData = {
    title: "Regulatory Framework",

    image: img("INSpgtwo"),

    description:
      "Insurance in India is governed by a rigorous statutory framework designed to protect policyholders and maintain market integrity.",

    points: [
      "Governed by IRDAI, which regulates insurers, pricing structures, product approvals, and mandatory solvency margins.",

      "Mandatory KYC and Suitability Assessments ensure that products are aligned with the client’s specific needs and risk profile.",

      "A mandatory ‘Free-Look Period’ of 15–30 days allows clients to review policy terms and cancel if they are not satisfied.",

      "Standardized Disclosure Norms require insurers to clearly share benefits, charges, exclusions, surrender rules, and claim processes.",

      "Strict Claims Settlement Regulations mandate specific timelines for claim acknowledgment and final payout to protect consumers."
    ]
  };

  const WhyInsuranceData = {
    title: "Why Insurance Matters",

    image: img("INSpgthree"),

    points: [
      {
        number: "1",

        text:
          "Protects family from financial uncertainty."
      },

      {
        number: "2",

        text:
          "Covers rising medical and hospitalization costs."
      },

      {
        number: "3",

        text:
          "Helps preserve long-term goals during emergencies."
      },

      {
        number: "4",

        text:
          "Enables tax benefits under Sections 80C & 80D."
      },

      {
        number: "5",

        text:
          "Acts as a foundation for a resilient financial plan."
      }
    ]
  };
  return (
    <div id={"InsuranceMC"}>
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Insurance</span>
      </div>

      <div className={"INSone"}>

        <div className={"heroText"}>

          {
            InsuranceHeroData.description.map((item, index) => (
              <span className={"Gen dark small"} key={index}>{item.text}</span>
            ))
          }

          <span className={"quote small"}>
            {InsuranceHeroData.strategicSignificance}
          </span>

        </div>

        <div className={"heroImg"}>
          <img loading="lazy"
            src={InsuranceHeroData.image}
            alt=""
          />
        </div>

      </div>

      <div className={"INStwo"}>
        <div className="innerTWO">
          <h2 className={"Gen dark"}>{InsuranceTypesData.title}</h2>
          <span className={"Gen light small"}>{InsuranceTypesData.description}</span>

          <div className={"cardsCont"}>

            {
              InsuranceTypesData.cards.map((item, index) => {

                const Icon = item.icon;

                return(
                    <div className={"cardEle"} key={index}>

                      <div className={"cardTop"}>

                        <Icon className={"IconCard"}/>

                        <h2 className={"Syn dark small"}>{item.title}</h2>

                      </div>

                      <span className={"Gen light small"}>{item.description}</span>

                    </div>
                );
              })
            }

          </div>

        </div>
      </div>

      <div className={"INSthree"}>

        <div className={"left"}>

          <h2 className={"Gen bold dark"}>{InsuranceRegulationData.title}</h2>

          <span className={"lineRed"}></span>

          <span className={"Gen dark small"}>
            {InsuranceRegulationData.description}
          </span>

          <img loading="lazy"
            src={`${InsuranceRegulationData.image}`}
            alt=""
          />

        </div>

        <div className={"right"}>

          {
            InsuranceRegulationData.points.map((item, index) => (
              <div className={"pointEle"} key={index}>

                <h2 className={"Gen light"}>{`0${index + 1}`}</h2>

                <span className={"Gen dark small"}>{item}</span>

              </div>
            ))
          }

        </div>

      </div>

      <div className="INSfour">

        <h2 className="Gen bold dark">
          {WhyInsuranceData.title}
        </h2>

        <div className="whyWrapper">

          <img
              loading="lazy"
              src={WhyInsuranceData.image}
              alt=""
          />

          <div className="whyGrid">
            {WhyInsuranceData.points.map((item, index) => (
                <div className={`whyEle whyEle${index + 1}`} key={index}>

                  <span className="Gen dark num">
                    {item.number}
                  </span>

                  <span className="Gen dark small">
            {item.text}
          </span>

                </div>
            ))}
          </div>

        </div>

      </div>

      <Ql/>

    </div>
  );
};

export default Insurance;