import "./About.scss";
import { useState, useEffect, useRef } from "react";
import {img} from "../../utils/image.js";
import {useNavigate} from "react-router-dom";



const About = () => {
  const nav = useNavigate();
  return (
    <div id="AboutMC">

      <div className="AbPgOne">
        <h1 className={"Gen dark bold"}>What We Offer</h1>
        <div className="GridCon">
          <div className="Con ACone">
            <img src={img("InvestInsight")} loading="lazy" alt=""/>

            <span className={"TextLeftAligned Gen light"}>Your legacy deserves a solid foundation. DreamLadder Capital helps you build lasting wealth through smart,
              diversified strategies.</span>
            <img onClick={() => {window.location.href = "tel:+918908082222";}} className={"tele"} loading="lazy" src={img("tele")} alt=""/>
          </div>
          <div className="Con ACtwo">
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>PMS / AIF</h2>
              <span className={"Gen dark small"}>Access Curated Portfolios from top Fund Managers</span>
            </div>
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>Mutual Fund</h2>
              <span className={"Gen dark small"}>Choose and Invest Through Leading Funds</span>
            </div>
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>Bond / Corporate FD</h2>
              <span className={"Gen dark small"}>Invest in High-Quality Products</span>
            </div>
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>Structured Products</h2>
              <span className={"Gen dark small"}>Facilitated Access to Market-Linked Solutions</span>
            </div>
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>Legacy & Estate Planning</h2>
              <span className={"Gen dark small"}>Curated Solutions for Wealth Transfer</span>
            </div>
            <div className="ContwoEles">
              <h2 className={"Syn dark small"}>Insurance</h2>
              <span className={"Gen dark small"}>Access Life, Health, and Asset Coverage</span>
            </div>
          </div>
        </div>

      </div>
      <div className="AbPgTwo">
        <div className="GridCon">
          <img loading="lazy" src={img("profileDashboard")} alt=""/>

          <div className="Con ACfour">
            <h2 className={"Gen dark"}>All Your Family Investments,<br/>One Simple App</h2>
            <span className={"Gen dark small"}>Easily view portfolio performance, transactions and reports for every family member - anytime, anywhere</span>
            <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/login", "_blank")}>Start now</button>
          </div>

          <div className="Con ACfive">
            <h2 className={"Gen"}>Setup SIP in 2 Minutes</h2>
            <span className={"Gen dark small"}>Setup SIP in Mutual Funds and diversify your portfolio to grow your net worth</span>
            <div id={"buttonWrapCon"}>
              <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/login", "_blank")}>Setup SIP</button>
              <button className="navBtn s" onClick={() => window.location.href = "/calc"}>SIP Calculator</button>
            </div>
          </div>

            <img loading="lazy" src={img("sipAmount")} alt=""/>

        </div>
      </div>
    </div>
  );
};

export default About;