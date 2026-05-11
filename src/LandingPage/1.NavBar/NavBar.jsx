import "./NavBar.scss"
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const NavBar = () => {
    const [hamAct, setHam] = useState(false);

      useEffect(() => {
        document.body.style.overflow = hamAct ? "hidden" : "auto";
      }, [hamAct]);

      const navigate = useNavigate();

    return (
        <>
          <div
            className={`backdrop ${hamAct ? "A" : ""}`}
            onClick={() => setHam(false)}
          />
            <div id="NavBarMC">
                <div className="IL1" onClick={() => {navigate('/')}}>
                    <img loading="lazy" loading="lazy" src="/logo.webp" alt="" className="logo" />
                </div>

                <button
                    className={`HamBtn ${hamAct ? "HamActive" : ""}`}
                    onClick={() => setHam(!hamAct)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`IL1 toBeInvis ${hamAct ? "open" : ""}`}>
                    <button className="navBtn">
                        We
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button className="navBtn">
                        Services
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button className="navBtn">
                        Insights
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>

                    <button className="navBtn">Connect</button>
                    <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/login", "_blank")}>Log-In</button>
                    <button className="navBtn s" onClick={() => window.open("https://dreamladdercapital.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp", "_blank")}>Sign-Up</button>
                </div>
            </div>
        </>
    )
}

export default NavBar;