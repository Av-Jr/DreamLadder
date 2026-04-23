import "./NavBar.scss"
import { useState } from 'react';

const NavBar = () => {
    const [hamAct, setHam] = useState(false);

    return (
        <div id="NavBarMC">
                  <div
                    className={`backdrop ${hamAct ? "A" : ""}`}
                    onClick={() => setHam(false)}
                  />
            <div className="IL1">
                <img src="/logo.png" alt="" className="logo" />
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
                <button className="navBtn s">Log-In</button>
                <button className="navBtn s">Sign-Up</button>
            </div>
        </div>
    )
}

export default NavBar;