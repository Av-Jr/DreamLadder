import "./LEP.scss";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import {img} from "../../utils/image.js";
import React from "react";

const LEP = () => {

  const LegacyEstateHeroData = {
    title: "Legacy and Estate Planning",

    image: "LEPpgone",

    points: [
      "A Will defines who inherits",
      "A Trust manages and protects wealth",
      "Certificates establish heirship",
      "Property transfers and asset recovery handle execution",
      "Post-demise services ensure closure",
    ],

    strategicSignificance:
      "Together, these create a seamless, secure legacy for your family.",
  };

  const LegacyEstateExpertiseData = [
    {
      expertise: "EXPERTISE 01",

      title: "Will Creation",

      description:
        "A Will ensures your wealth and assets are distributed as per your wishes after your demise. It defines beneficiaries, executors, and witnesses and prevents disputes or delays under intestate succession laws.",

      strategicSignificance:
        "A Will takes effect only after death and focuses on asset distribution, not management. It’s the foundation of every legacy plan.",

      image: "LEPpgtwo",
    },

    {
      expertise: "EXPERTISE 02",

      title: "Family Trust",

      description:
        "A Family Trust allows you to manage, protect, and pass on assets during your lifetime and beyond. It ensures privacy, protects wealth from disputes, and simplifies business or family succession.age, protect, and pass on assets during your lifetime and beyond.",

      strategicSignificance:
        "A Trust operates during life, unlike a Will, and offers asset protection and continuity.",

      image: "LEPpgthree",
    },

    {
      expertise: "EXPERTISE 03",

      title: "Succession / Legal Heir Certificate",

      description:
        "These certificates are legal proofs of heirship required to claim or transfer assets when a person passes away. Succession Certificates (issued by courts) cover movable assets, while Legal Heir Certificates (issued by local authorities) confirm family relationships. proofs of heirship required to claim or transfer assets.",

      strategicSignificance:
        "They don’t define distribution—they only establish the right to claim.",

      image: "LEPpgfour",
    },

    {
      expertise: "EXPERTISE 04",

      title: "Property Transfer & Claims",

      description:
        "After death, property ownership changes hands through Probate (if there’s a Will) or via Succession Certificates (if there isn’t). DreamLadder assists families in completing mutation, documentation, and registration smoothly.",

      strategicSignificance:
        "It focuses solely on transferring ownership of immovable assets.",

      image: "LEPpgfive",
    },

    {
      expertise: "EXPERTISE 05",

      title: "Unclaimed Asset Recovery",

      description:
        "Thousands of crores lie unclaimed in banks, mutual funds, and insurance policies due to missing paperwork or lack of awareness. We help families trace and recover such funds through RBI’S DEAF, IEPF, and other official channels.",

      strategicSignificance:
        "It’s about reclaiming forgotten wealth, not planning new inheritance.",

      image: "LEPpgsix",
    },

    {
      expertise: "EXPERTISE 06",

      title: "All Post-Demise Services",

      description:
        "Our Post-Demise Services cover every stage after a person’s passing—document collection, Will execution, property transfers, unclaimed asset recovery, and tax filings.",

      strategicSignificance:
        "It’s a complete, end-to-end solution that ensures your family’s financial transition is smooth, compliant, and stress-free.",

      image: "LEPpgseven",
    },
  ];

  return (
    <div id={"LegacyEstatePlanningMC"}>
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Legacy and <br id={"breakMob"} />Estate Planning</span>
      </div>

      <div className={"LEPone"}>

        <div className={"left"}>

          <h1 className={"Gen small"}>Building a Complete Legacy Plan</h1>

          <div className={"pointsCont"}>

            {
              LegacyEstateHeroData.points.map((item, index) => (
                <div className={"pointEle"} key={index}>

                  <span className={"Gen dark small"}>{item}</span>

                </div>
              ))
            }

          </div>

          <span className={"quote small Gen"}>
            {LegacyEstateHeroData.strategicSignificance}
          </span>

        </div>

        <div className={"right"}>

          <img loading="lazy"
            src={`${img(LegacyEstateHeroData.image)}`}
            alt=""
          />

        </div>

      </div>

      <div className={"LEPtwo"}>

        {
          LegacyEstateExpertiseData.map((item, index) => (

            <div
              className={`expertiseRow ${index % 2 !== 0 ? "reverse" : ""}`}
              key={index}
            >

              <div className={"imgCont"}>

                <img loading="lazy"
                  src={`${img(item.image)}`}
                  alt=""
                />

              </div>

              <div className={"textCont"}>

                <span className={"Syn light small"}>{item.expertise}</span>

                <h2 className={"Syn dark"}>{item.title}</h2>

                <span className={"Gen light small ju"}>{item.description}</span>

                <div className={"quoteBox"}>

                  <span className={"Gen esmall light bold"}>STRATEGIC SIGNIFICANCE</span>

                  <span className={"Gen emsmall dark italic"}>
                    “{item.strategicSignificance}”
                  </span>

                </div>

              </div>

            </div>
          ))
        }

      </div>

      <Ql/>

    </div>
  );
};

export default LEP;