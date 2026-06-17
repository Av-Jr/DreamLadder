import "./Ql.scss";
import React from "react";
import {img} from "../../utils/image.js"

const socialLinks = [
  {
    id: "youtube",
    ariaLabel: "Open YouTube",
    link: "https://www.youtube.com/@DreamLadderCapital"
  },
  {
    id: "linkedin",
    ariaLabel: "Open LinkedIn",
    link: "https://www.linkedin.com/company/dreamladdercapital/"
  },
  {
    id: "facebook",
    ariaLabel: "Open Facebook",
    link: "https://www.facebook.com/DreamLadderCapital"
  },
  {
    id: "instagram",
    ariaLabel: "Open Instagram",
    link: "https://www.instagram.com/dreamladdercapital"
  },
  {
    id: "x",
    ariaLabel: "Open X",
    link: "https://x.com/SadaySinha15"
  }
];

const downloadLinks = [
  {
    id: "gplay",
    ariaLabel: "Download from Google Play",
    link: "https://play.google.com/store/search?q=dreamladder+capital&c=apps&hl=en_IN&pli=1"
  },
  {
    id: "appStore",
    ariaLabel: "Download from App Store",
    link: "https://apps.apple.com/in/app/dreamladder-capital/id1527793478"
  }
];

const footerSections = [
  {
    title: "Quick Links",
    className: "QL",
    items: [
      {
        label: "Client Login",
        className: "QLcl",
        type: "external",
        path: "https://dreamladdercapital.my-portfolio.co.in/app/#/login"
      },
      {
        label: "Download",
        className: "QLd",
        type: "internal",
        path: "/download"
      },
      {
        label: "Blogs",
        className: "QLb",
        type: "internal",
        path: "/blogs"
      },
      {
        label: "Financial Calculator",
        className: "QLfc",
        type: "internal",
        path: "/calc"
      }
    ]
  },

  {
    title: "Our Products",
    className: "OP",
    items: [
      {
        label: "Mutual Funds",
        className: "OPmf",
        type: "internal",
        path: "/mutual-funds"
      },
      {
        label: "PMS / AIF",
        className: "OPpa",
        type: "internal",
        path: "/pms"
      },
      {
        label: "Insurance",
        className: "OPi",
        type: "internal",
        path: "/insurance"
      },
      {
        label: "Structured Products",
        className: "OPsp",
        type: "internal",
        path: "/structured-products"
      }
    ]
  },

  {
    title: "Financial Goals",
    className: "FG",
    items: [
      {
        label: "Education",
        className: "FGe",
        type: "internal",
        path: "/calc?tab=education"
      },
      {
        label: "Marriage",
        className: "FGm",
        type: "internal",
        path: "/calc?tab=marriage"
      },
      {
        label: "Retirement",
        className: "FGr",
        type: "internal",
        path: "/calc?tab=retirement"
      },
      {
        label: "SIP",
        className: "FGs",
        type: "internal",
        path: "/calc?tab=sip"
      }
    ]
  },

  {
    title: "Reach Us",
    className: "RU",
    items: [
      {
        label: "+91 89-0808-2222",
        className: "RUp",
        type: "internal",
        path: "/about"
      },
      {
        label: "info@dreamladdercapital.com",
        className: "RUe",
        type: "internal",
        path: "/about#top"
      },
      {
        label:
          "DreamLadder Capital #20, 10th Floor, R. City Offices, Ghatkopar (W), Mumbai – 86",
        className: "RUl",
        type: "internal",
        path: "/about"
      }
    ]
  }
];

const legalLinks = [
  {
    label: "Privacy Policy",
    type: "internal",
    path: "/privacy-policy"
  },
  {
    label: "Disclaimer",
    type: "internal",
    path: "/disclaimer"
  },
  {
    label: "Disclosure",
    type: "internal",
    path: "/disclosure"
  },
  {
    label: "SID/SAI/KIM",
    type: "external",
    path: "https://www.sebi.gov.in/filings/mutual-funds.html"
  },
  {
    label: "Code of Conduct",
    type: "none"
  },
  {
    label: "SEBI Circulars",
    type: "external",
    path:
      "https://www.sebi.gov.in/sebiweb/home/HomeAction.do?doListing=yes&sid=1&ssid=7&smid=0"
  },
  {
    label: "AMFI Risk Factors",
    type: "external",
    path:
      "https://www.amfiindia.com/investor-corner/knowledge-center/risks-in-mutual-funds.html"
  }
];

export default function Ql() {

  return (
    <footer id="QlMC">

      <div className="links">

        <div className="socials">

          <a href="/">
            <img
              loading="lazy"
              src={img("logo")}
              alt="DreamLadder Capital Logo"
              className="logo"
            />
          </a>

          <div className="socialsEles">

            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className={`socialBtn ${item.id}`}
              />
            ))}

          </div>

          <div className="downloadsSec">

            {downloadLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className={`downloadBtn ${item.id}`}
              />
            ))}

          </div>

        </div>

        {footerSections.map((section) => (

          <div
            key={section.title}
            className={`QLeles ${section.className}`}
          >

            <h2 className={"Gen"}>{section.title}</h2>

            <div className="items">

              {section.items.map((item) => (

                item.type === "internal" ? (

                  <a
                    key={item.label}
                    href={item.path}
                    className={`linkItem ${item.className}`}
                  >
                    <span className={"Gen small light"}>{item.label}</span>
                  </a>

                ) : (

                  <button
                    key={item.label}
                    className={`linkItem ${item.className}`}
                    onClick={() =>
                      window.open(
                        item.path,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <span className={"Gen light small"}>{item.label}</span>
                  </button>

                )

              ))}

            </div>

          </div>

        ))}

      </div>

      <div className="footerDivider" />

      <div className="riskFactors">

        <span className="Gen dark bold small">
          Risk Factors –
        </span>

        <span className="Gen small light">
          Investments in Mutual Funds are subject to Market Risks. Read all
          scheme related documents carefully before investing. Mutual Fund
          Schemes do not assure or guarantee any returns. Past performances
          of any Mutual Fund Scheme may or may not be sustained in future.
          There is no guarantee that the investment objective of any
          suggested scheme shall be achieved. All existing and prospective
          investors are advised to check and evaluate the Exit loads and
          other cost structure (TER) applicable at the time of making the
          investment before finalizing on any investment decision for Mutual
          Funds schemes. We deal in Regular Plans only for Mutual Fund
          Schemes and earn a Trailing Commission on client investments.
          Disclosure for Commission earnings is made to clients at the time
          of investments. Option of Direct Plan for every Mutual Fund Scheme
          is available to investors offering advantage of lower expense
          ratio. We are not entitled to earn any commission on Direct plans.
          Hence we do not deal in Direct Plans.
        </span>

      </div>

      <div className="footerDivider bottomDivider" />

      <div className="registrationInfo">

        <span className={"Gen small bold dark"}>
          AMFI Registered Mutual Funds Distributor | ARN-143182 |
          Initial Date of Registration: 04/04/2018 |
          Validity: 03/04/2027
        </span>

        <span className={"Gen small bold dark"}>
          APRN Code: APRN05201 | Validity: 06/04/2028
        </span>

      </div>

      <div className="bottomLegal">

        <span className="bold Gen">
          ©2026 DreamLadder Capital.
        </span>

        <div className="legalLinks">

          {legalLinks.map((item, index) => (

            <React.Fragment key={item.label}>

              {item.type === "internal" && (

                <a
                  href={item.path}
                  className="legalLink"
                >
                  <span className={"Gen small light"}>{item.label}</span>
                </a>

              )}

              {item.type === "external" && (

                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="legalLink"
                >
                  <span className={"Gen small"}>{item.label}</span>
                </a>

              )}

              {item.type === "none" && (

                <span className="Gen small light">
                  {item.label}
                </span>

              )}

              {index !== legalLinks.length - 1 && (
                <span className="separator Gen bold">|</span>
              )}

            </React.Fragment>

          ))}

        </div>

      </div>

    </footer>
  );
}