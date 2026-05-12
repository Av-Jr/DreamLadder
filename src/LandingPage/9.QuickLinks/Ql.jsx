import "./Ql.scss";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
        path: "/calc"
      },
      {
        label: "Marriage",
        className: "FGm",
        type: "internal",
        path: "/calc"
      },
      {
        label: "Retirement",
        className: "FGr",
        type: "internal",
        path: "/calc"
      },
      {
        label: "SIP",
        className: "FGs",
        type: "internal",
        path: "/calc"
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
        path: "/about"
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

export default function Ql() {

  const navigate = useNavigate();

  const handleNavigation = (type, path) => {

    if (type === "external") {
      window.open(path, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(path);
  };

  return (
    <footer id="QlMC">

      <div className="links">

        <div className="socials">

          <Link to="/">
            <img
              loading="lazy"
              src="/logo.webp"
              alt="DreamLadder Capital Logo"
              className="logo"
            />
          </Link>

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

            <h2>{section.title}</h2>

            <div className="items">

              {section.items.map((item) => (

                item.type === "internal" ? (

                  <Link
                    key={item.label}
                    to={item.path}
                    className={`linkItem ${item.className}`}
                  >
                    {item.label}
                  </Link>

                ) : (

                  <button
                    key={item.label}
                    className={`linkItem ${item.className}`}
                    onClick={() =>
                      handleNavigation(item.type, item.path)
                    }
                  >
                    {item.label}
                  </button>

                )

              ))}

            </div>

          </div>

        ))}

      </div>

    </footer>
  );
}