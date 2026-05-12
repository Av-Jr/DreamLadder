import "./About.scss";
import { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom";



const About = () => {
  const nav = useNavigate();
  return (
    <div id="AboutMC">
      <h1>What We Offer</h1>
      <div className="GridCon">

        <div className="Con ACone">
          <img loading="lazy" src="/InvestInsight.webp" loading="lazy" alt=""/>

          <h3>Your legacy deserves a solid foundation. DreamLadder Capital helps you build lasting wealth through smart,
            diversified strategies.</h3>
          <img loading="lazy" src="/tele.webp" loading="lazy" alt=""/>
        </div>

        <div className="Con ACtwo">
          <div className="ContwoEles">
            <h2>PMS / AIF</h2>
            <h3>Access Curated Portfolios from top Fund Managers</h3>
          </div>
          <div className="ContwoEles">
            <h2>Mutual Fund</h2>
            <h3>Choose and Invest Through Leading Funds</h3>
          </div>
          <div className="ContwoEles">
            <h2>Bond / Corporate FD</h2>
            <h3>Invest in High-Quality Products</h3>
          </div>
          <div className="ContwoEles">
            <h2>Structured Products</h2>
            <h3>Facilitated Access to Market-Linked Solutions</h3>
          </div>
          <div className="ContwoEles">
            <h2>Legacy & Estate Planning</h2>
            <h3>Curated Solutions for Wealth Transfer</h3>
          </div>
          <div className="ContwoEles">
            <h2>Insurance</h2>
            <h3>Access Life, Health, and Asset Coverage</h3>
          </div>
        </div>

        <div className="Con ACthree"><img loading="lazy" src="/profileDashboard.webp" loading="lazy" alt=""/></div>

        <div className="Con ACfour">
          <h2>All Your Family Investments, One Simple App</h2>
          <h3>Easily view portfolio performance, transactions and reports for every family member - anytime, anywhere</h3>
          <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/login", "_blank")}>Start now</button>
        </div>

        <div className="Con ACfive">
          <h2>Setup SIP in 2 Minutes</h2>
          <h3>Setup SIP in Mutual Funds and diversify your portfolio to grow your net worth</h3>
          <div className="IL1">
            <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/login", "_blank")}>Setup SIP</button>
            <button className="navBtn s" onClick={() => nav("/calc")}>SIP Calculator</button>
          </div>
        </div>

        <div className="Con ACsix">
          <img loading="lazy" src="/sipAmount.webp" loading="lazy" alt=""/>
        </div>

      </div>
    </div>
  );
};

export default About;