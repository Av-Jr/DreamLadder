import "./Disclosure.scss";

import React from "react";

import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";

const disclosureData = [
  {
    scheme: "Liquid/Ultra Short Term Schemes",
    trail: "0.05% - 0.70%"
  },
  {
    scheme: "Short Term Income Funds",
    trail: "0.50% - 0.90%"
  },
  {
    scheme: "Income Funds",
    trail: "0.40% - 1.00%"
  },
  {
    scheme: "Gilt Funds",
    trail: "0.15% - 0.90%"
  },
  {
    scheme: "Hybrid Debt/Monthly Income Plans",
    trail: "0.90% - 1.20%"
  },
  {
    scheme: "Arbitrage Funds",
    trail: "0.55% - 0.70%"
  },
  {
    scheme: "Fund of Funds",
    trail: "0.25% - 0.50%"
  },
  {
    scheme: "ELSS",
    trail: "0.65% - 2.00%"
  },
  {
    scheme: "Index Funds",
    trail: "0.30% - 1.00%"
  },
  {
    scheme: "Equity/ Hybrid Equity/ Balance Funds",
    trail: "0.65% - 2.00%"
  },
  {
    scheme: "Fixed Maturity Plans",
    trail: "Variable"
  }
];

export default function Disclosure() {

  return (
    <div id="DisclosureMC">
      <div className="titleHeadZ">
        <NavBar></NavBar>
        <span className="titleZ">Disclosure</span>
      </div>

      <div className="tableSec">

        <div className="tableWrap">

          <div className="tableHead">

            <div className="th scheme">
              SCHEME TYPE
            </div>

            <div className="th trail">
              TRAIL-1ST YEAR ONWARDS
            </div>

          </div>

          {disclosureData.map((item) => (

            <div
              key={item.scheme}
              className="tableRow"
            >

              <div className="td scheme">
                {item.scheme}
              </div>

              <div className="td trail">
                {item.trail}
              </div>

            </div>

          ))}

        </div>

        <div className="notesSec">

          <h3>
            Details of Scheme level commission on Mutual funds are available
            with the Relationship Managers and would be produced on demand.
          </h3>

          <h3>
            This is on a best effort basis and rates are updated as and when
            actual rates are received from AMCS.
          </h3>

          <h3>
            We are a NISM certified / AMFI registered mutual fund
            distributor and not an RIA. We get compensated / incentivised
            by AMCS. We don&apos;t charge any fees for our services.
          </h3>

        </div>

      </div>

      <Ql />

    </div>
  );
}