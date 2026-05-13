import "./Bp.scss";

import React from "react";

import { useNavigate } from "react-router-dom";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

import { CheckCircle2 } from "lucide-react";
import { img } from "../../utils/image.js";

const Bp = () => {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Risk & Objective Alignment",
      desc: "A bespoke portfolio begins with clarity. Understanding risk appetite, liquidity requirements, time horizon, and long-term financial objectives forms the foundation of structured allocation. Suitability remains central to every allocation framework.",
    },

    {
      title: "Strategic Asset Allocation",
      desc: "Assets are structured across equity, fixed income, and alternative avenues to balance growth and preservation. Allocation decisions are guided by long-term discipline rather than short-term market movements.",
    },

    {
      title: "Coordinated Multi-Asset Exposure",
      desc: "Exposure may be facilitated across regulated investment avenues including mutual funds, PMS, AIFs, direct equities where appropriate, and legacy-oriented structures. Every allocation remains aligned with suitability considerations and long-term wealth priorities.",
    },

    {
      title: "Ongoing Portfolio Review",
      desc: "Periodic portfolio reviews are conducted to assess alignment with evolving financial objectives and changing market conditions. Structured rebalancing considerations help maintain long-term discipline and consistency within the allocation framework.",
    },
  ];

  return (
    <>
      <NavBar />

      <div className="bespokePage">

        <div className="heroSection">

          <div className="overlay"></div>

          <div className="heroContent">
            <h1>Bespoke Portfolio</h1>
          </div>

        </div>

        <div className="mainContainer">

          <div className="heroContainer">

            <div className="heroText">

              <p>
                Every financial journey is distinct. A bespoke portfolio begins
                with a clear understanding of your risk appetite, liquidity
                priorities, and long-term objectives.
              </p>

              <p>
                Rather than applying standard allocation models, exposure should
                be structured across suitable investment avenues in alignment
                with one’s financial landscape — balancing growth, preservation,
                and continuity with discipline.
              </p>

              <div className="quoteBox">

                <span></span>

                <p>
                  Disciplined allocation. Continuous monitoring.
                  Balanced growth.
                </p>

              </div>

            </div>

            <div className="heroImage">

              <img
                src={img("bPpgone")}
                alt="Bespoke Portfolio"
              />

            </div>

          </div>

          <div className="philosophyContainer">

            <div className="philosophyImage">

              <img
                src={img("bPpgtwo")}
                alt="Core Philosophy"
              />

            </div>

            <div className="philosophyText">

              <h2>Core Philosophy</h2>

              <p>
                Enduring wealth is shaped by suitability-driven allocation
                aligned with risk capacity, financial priorities, and long-term
                objectives.
              </p>

              <p>
                Short-term narratives do not define long-term outcomes.
                The emphasis remains on governance, consistency, and
                measured progression across market environments.
              </p>

              <div className="quoteBox">

                <span></span>

                <p>
                  Disciplined allocation. Continuous monitoring.
                  Balanced growth.
                </p>

              </div>

            </div>

          </div>

          <div className="approachSection">

            <div className="approachLeft">

              <h2>Our Approach</h2>

              <p>
                Significant wealth requires more than product selection.
                It demands structure, discipline, and clarity of purpose.
              </p>

              <div className="miniQuote">
                “A Structured Philosophy, Not a Standard Template”
              </div>

            </div>

            <div className="approachRight">

              {
                cards.map((item, index) => (

                  <div className="approachCard" key={index}>

                    <span className={"matchCol"}>
                    <div className="line"></div>

                    <h3>{item.title}</h3>
                    </span>

                    <p>{item.desc}</p>

                  </div>
                ))
              }

            </div>

          </div>

          <div
            className="ctaSection"
            style={{
              background: `url(${img("HP4")}) center/cover no-repeat`,
            }}
          >

            <div className="ctaImage">

              <img
                src={img("bPpgthree")}
                alt="AI Assistant"
              />

            </div>

            <div className="ctaContent">

              <h2>
                “Hi, I am your trusted friend and financial co-pilot.”
              </h2>

              <button
                className="navBtn s"
                onClick={() =>
                  window.open(
                    "https://calendly.com/dreamladdercapital/portfolio-discussion-meeting",
                    "_blank"
                  )
                }
              >
                Book your slot
              </button>

            </div>

            <div className="ctaPoints">

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Diversification</p>
              </div>

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Unbiased</p>
              </div>

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Simple & Jargon-free</p>
              </div>

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Follow Portfolio approach</p>
              </div>

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Constant monitoring & re-balancing</p>
              </div>

              <div className="point">
                <CheckCircle2 size={22} />
                <p>Regular Hypothesis testing</p>
              </div>

            </div>

          </div>

          <div className="bottomBar">

            <h3>For more information</h3>

            <div className="btns">

              <button
                className="navBtn s"
                onClick={() => window.location.href = "/blogs"}
              >
                Read More
              </button>

              <button
                className="navBtn s"
                onClick={() => window.location.href = "/connect"}
              >
                Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

      <Ql />
    </>
  );
};

export default Bp;