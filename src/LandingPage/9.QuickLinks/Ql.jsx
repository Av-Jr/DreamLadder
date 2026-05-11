import "./Ql.scss";
import React from "react";
import { useNavigate } from "react-router-dom";

const SocialL = [
  {
    title: "youtube",
    link: "https://www.youtube.com/@DreamLadderCapital"
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/company/dreamladder-capital"
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/DreamLadderCapital"
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/dreamladdercapital"
  },
  {
    title: "x",
    link: "https://x.com/SadaySinha15"
  }
];

const downloadsL = [
  {
    title: "gplay",
    link: "https://play.google.com/store/search?q=dreamladder+capital&c=apps&hl=en_IN&pli=1"
  },
  {
    title: "appStore",
    link: "https://apps.apple.com/in/app/dreamladder-capital/id1527793478"
  }
];

const dataQL = [
  {
    title: "Quick Links",
    className: "QL",
    eles: [
      ["Client Login", "QLcl", "/login"],
      ["Download", "QLd", "/download"],
      ["Blogs", "QLb", "/blogs"],
      ["Financial Calculator", "QLfc", "/calc"]
    ]
  },

  {
    title: "Our Products",
    className: "OP",
    eles: [
      ["Mutual Fund", "OPmf", "/mutual-fund"],
      ["PMS / AIF", "OPpa", "/pa"],
      ["Insurance", "OPi", "/insurance"],
      ["Structured Products", "OPsp", "/structured-products"]
    ]
  },

  {
    title: "Financial Goal",
    className: "FG",
    eles: [
      ["Education", "FGe", "/calc"],
      ["Marriage", "FGm", "/calc"],
      ["Retirement", "FGr", "/calc"],
      ["SIP", "FGs", "/calc"]
    ]
  },

  {
    title: "Reach Us",
    className: "RU",
    eles: [
        ["+91 89-0808-2222", "RUp", "/contact"],
        ["info@dreamladdercapital.com", "RUe", "/contact"],
        ["DreamLadder Capital #20, 10th Floor, R. City Offices, Ghatkopar (W), Mumbai – 86", "RUl", "/contact"]
    ]
  }
];

export default function Ql() {
  const navigate = useNavigate();

  return (
    <div id="QlMC">
      <div className="links">

        <div className="socials">
          <img loading="lazy" src="/logo.webp" alt="DreamLadder Logo" className="logo" />

          <div className="socialsEles">
            {SocialL.map((item, index) => (
              <button
                key={index}
                className={`socialBtn ${item.title}`}
                onClick={() => window.open(item.link, "_blank")}
              />
            ))}
          </div>

          <div className="downloadsSec">
            {downloadsL.map((item, index) => (
              <button
                key={index}
                className={`downloadBtn ${item.title}`}
                onClick={() => window.open(item.link, "_blank")}
              />
            ))}
          </div>
        </div>

        {
          dataQL.map((item, index) => (
            <div key={index} className={`QLeles ${item.className}`}>
              <h2>{item.title}</h2>

              <div className="items">
{
  item.eles.map(([name, cl, pg], i) => (
    <button
      key={i}
      className={`linkBtn ${cl}`}
      onClick={() => {
        if (item.title === "Quick Links") {

          if (name === "Client Login") {
            window.open(
              "https://dreamladdercapital.my-portfolio.co.in/app/#/login",
              "_blank"
            );
          }

          else if (name === "Financial Calculator") {
            navigate("/calc");
          }

        } else {
          navigate(pg);
        }
      }}
    >
      {name}
    </button>
  ))
}
              </div>
            </div>
          ))
        }

      </div>
    </div>
  );
}