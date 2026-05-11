
import {useNavigate} from "react-router-dom";
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import Ql from "../../LandingPage/9.QuickLinks/Ql.jsx";
import "./wws.scss";

const Wws = () => {
    const nav = useNavigate();
const wwsData = [
  {
    image: "wwsone",
    title: "High-Net-Worth Individuals (HNIs)",
    description:
      "We work with affluent individuals who seek long-term wealth creation, capital preservation, and access to curated investment strategies — from PMS and equities to structured products and estate planning."
  },

  {
    image: "wwstwo",
    title: "Families & Multi-Generational Investors",
    description:
      "Whether it’s planning for children’s education, building a family trust, or managing inter-generational wealth transfers, we guide families at every stage of their financial journey with care, clarity, and confidentiality."
  },

  {
    image: "wwsthree",
    title: "Corporates & Business Owners",
    description:
      "From optimizing idle capital to ESOP liquidity planning, reserve management, and succession structuring, we help businesses grow and protect wealth with discipline and foresight."
  },

  {
    image: "wwsfour",
    title: "Professionals & First-Generation Wealth Creators",
    description:
      "For doctors, CXOs, entrepreneurs, and salaried professionals, we design personalized investment plans that evolve with careers, lifestyles, and life goals — balancing growth with protection."
  },

  {
    image: "wwsfive",
    title: "Retirees & Legacy Planning",
    description:
      "We offer retirement income strategies, estate planning, and risk-managed portfolios to help you transition from accumulation to distribution — while preserving your legacy for the next generation."
  }
];
    return(
        <div id={"WwsMC"}>
            <NavBar></NavBar>
            <h1 className="titleHead">Who We Serve</h1>
            <div className="WwsCardsCon">
                {wwsData.map((item, index) => (
                    <div className={`WwsCards ${index % 2 === 0 ? "rev" : ""}`} key={index}>
                        <img loading="lazy" src={`/${item.image}.webp`} alt=""/>
                        <div className={"heroText"}>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                        </div>
                    </div>
                    )
                )}
            </div>
            <div className="connectMe">
                <h1>Lets Build Your Financial Roadmap</h1>
                <span>Engage with our team to discuss asset allocation and suitable investment solutions designed for long-term wealth continuity</span>
                <button className="navBtn s" onClick={() => {nav("/connect")}}>Connect with us</button>
            </div>

            <Ql></Ql>
        </div>
    )
}

export default Wws;