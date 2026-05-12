import "./NavBar.scss"
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";

const NavBar = () => {

    const [hamAct, setHam] = useState(false);

    const [mobileOpen, setMobileOpen] = useState(null);
    const [mobileSubOpen, setMobileSubOpen] = useState(null);

    useEffect(() => {
        document.body.style.overflow = hamAct ? "hidden" : "auto";
    }, [hamAct]);

    const navigate = useNavigate();

    const navData = [
        {
            title: "We",
            dropdown: [
                {
                    title: "About Us",
                    path: "/about"
                },
                {
                    title: "Who We Serve",
                    path: "/who-we-serve"
                }
            ]
        },

        {
            title: "Services",
            dropdown: [
                {
                    title: "What we Offer",
                    children: [
                        {
                            title: "Mutual Funds",
                            path: "/mutual-funds"
                        },
                        {
                            title: "PMS / AIF",
                            path: "/pms"
                        },
                        {
                            title: "Bonds",
                            path: "/bonds"
                        },
                        {
                            title: "Structured Products",
                            path: "/structured-products"
                        },
                        {
                            title: "Legacy / Estate Planning",
                            path: "/legacy-estate-planning"
                        },
                        {
                            title: "Insurance",
                            path: "/Insurance"
                        }
                    ]
                },

                {
                    title: "Bespoke Portfolios",
                    path: "/bespoke-portfolio"
                }
            ]
        },

        {
            title: "Insights",
            dropdown: [
                {
                    title: "Blogs",
                },
                {
                    title: "Media",
                },
                {
                    title: "Calculator",
                    path: "/calc"
                }
            ]
        }
    ];

    return (
        <>
            <div
                className={`backdrop ${hamAct ? "A" : ""}`}
                onClick={() => setHam(false)}
            />

            <div id="NavBarMC">

                <div
                    className="IL1"
                    onClick={() => {
                        navigate('/')
                    }}
                >
                    <img
                        fetchPriority={"high"}
                        src="/logo.webp"
                        alt=""
                        className="logo"
                    />
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

                    {
                        navData.map((item, index) => (

                            <div
                                className={`navItem ${mobileOpen === item.title ? "mobileActive" : ""}`}
                                key={index}
                            >

                                <button
                                    className="navBtn"
                                    onClick={() => {

                                        if(window.innerWidth <= 768){

                                            setMobileOpen(
                                                mobileOpen === item.title
                                                    ? null
                                                    : item.title
                                            )

                                        }

                                    }}
                                >

                                    {item.title}

                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6 9L12 15L18 9"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                </button>

                                <div className="dropDown">

                                    {
                                        item.dropdown.map((dropItem, dropIndex) => (

                                            <div
                                                className={`
                                                    dropItem
                                                    ${dropItem.children ? "hasChild" : ""}
                                                    ${mobileSubOpen === dropItem.title ? "mobileSubActive" : ""}
                                                `}
                                                key={dropIndex}
                                            >

                                                <button
                                                    className="dropBtn"
                                                    onClick={() => {

                                                        if(dropItem.children && window.innerWidth <= 768){

                                                            setMobileSubOpen(
                                                                mobileSubOpen === dropItem.title
                                                                    ? null
                                                                    : dropItem.title
                                                            )

                                                        }

                                                        else if(dropItem.path){

                                                            navigate(dropItem.path)
                                                            setHam(false)

                                                        }

                                                    }}
                                                >

                                                    {dropItem.title}

                                                    {
                                                        dropItem.children && (

                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9 6L15 12L9 18"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>

                                                        )
                                                    }

                                                </button>

                                                {
                                                    dropItem.children && (

                                                        <div className="subDropDown">

                                                            {
                                                                dropItem.children.map((subItem, subIndex) => (

                                                                    <button
                                                                        className="subDropBtn"
                                                                        key={subIndex}
                                                                        onClick={() => {

                                                                            navigate(subItem.path)
                                                                            setHam(false)

                                                                        }}
                                                                    >
                                                                        {subItem.title}
                                                                    </button>

                                                                ))
                                                            }

                                                        </div>

                                                    )
                                                }

                                            </div>

                                        ))
                                    }

                                </div>

                            </div>

                        ))
                    }

                    <button className="navBtn" onClick={() => {navigate("/connect")}}>
                        Connect
                    </button>

                    <button
                        className="navBtn s"
                        onClick={() =>
                            window.open(
                                "https://dreamladdercapital.my-portfolio.co.in/app/#/login",
                                "_blank"
                            )
                        }
                    >
                        Log-In
                    </button>

                    <button
                        className="navBtn s"
                        onClick={() =>
                            window.open(
                                "https://dreamladdercapital.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp",
                                "_blank"
                            )
                        }
                    >
                        Sign-Up
                    </button>

                </div>

            </div>
        </>
    )
}

export default NavBar;