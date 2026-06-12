import "./NavBar.scss";
import {useState, useEffect} from "react"
import { useNavigate} from "react-router-dom";
import { img } from "../../utils/image.js";
import {ChevronDown} from "lucide-react";

const NavBar = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);
    const [openSubSection, setOpenSubSection] = useState(null);

    const navData = [
        {
            title: "We",
            className: "navBtn",
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
            className: "navBtn",
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
                            path: "/insurance"
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
            className: "navBtn",
            dropdown: [
                {
                    title: "Blogs",
                    path: "/blogs"
                },
                {
                    title: "Media",
                    path: "/media"
                },
                {
                    title: "Calculator",
                    path: "/calc"
                }
            ]
        },

        {
            title: "Connect",
            className: "navBtn",
            path: "/connect"
        },

        {
            title: "Log-In",
            className: "navBtn s",
            isExternal: true,
            path: "https://dreamladdercapital.my-portfolio.co.in/app/#/login"
        },

        {
            title: "Sign-Up",
            className: "navBtn s",
            isExternal: true,
            path: "https://dreamladdercapital.my-portfolio.co.in/app/#/kycOnBoarding/mobileSignUp"
        }
    ];

    return (
        <div id="NavBarMC">
            <div className="logo">
                <img src={img("logo")} alt="" className="imgLogo" onClick={() => {navigate("/")}}/>
            </div>

            <button
                className="hamBtn navBtn"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {
                menuOpen && (
                    <div className="mobileMenu">
                        {
                            navData.map((item, index) => (
                                <div className="mobileItem" key={index}>

                                    <button
                                        className={`mobileBtn ${item.className?.includes("s") ? "mobileActionBtn" : ""}`}
                                        onClick={() => {

                                            if(item.dropdown){

                                                setOpenSection(
                                                    openSection === item.title
                                                        ? null
                                                        : item.title
                                                );

                                                return;
                                            }

                                            if(item.isExternal){
                                                window.open(item.path, "_blank");
                                            }
                                            else{
                                                navigate(item.path);
                                            }

                                            setMenuOpen(false);
                                        }}
                                    >
                                        {item.title}
                                    </button>

                                    {
                                        openSection === item.title &&
                                        item.dropdown && (

                                            <div className="mobileSubMenu">

                                                {
                                                    item.dropdown.map((dropItem, dropIndex) => (

                                                        <div key={dropIndex}>

                                                            <button
                                                                className="mobileSubBtn"
                                                                onClick={() => {

                                                                    if(dropItem.children){

                                                                        setOpenSubSection(
                                                                            openSubSection === dropItem.title
                                                                                ? null
                                                                                : dropItem.title
                                                                        );

                                                                        return;
                                                                    }

                                                                    navigate(dropItem.path);
                                                                    setMenuOpen(false);

                                                                }}
                                                            >
                                                                {dropItem.title}
                                                            </button>

                                                            {
                                                                openSubSection === dropItem.title &&
                                                                dropItem.children && (

                                                                    <div className="mobileThirdMenu">

                                                                        {
                                                                            dropItem.children.map((child, childIndex) => (

                                                                                <button
                                                                                    key={childIndex}
                                                                                    className="mobileThirdBtn"
                                                                                    onClick={() => {

                                                                                        navigate(child.path);

                                                                                        setMenuOpen(false);
                                                                                        setOpenSection(null);
                                                                                        setOpenSubSection(null);

                                                                                    }}
                                                                                >
                                                                                    {child.title}
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

                                        )
                                    }

                                </div>
                            ))
                        }

                    </div>
                )
            }
            {
                menuOpen &&
                <div
                    className="overlay"
                    onClick={() => setMenuOpen(false)}
                />
            }


            <div className="navLinks">
                {navData.map((item, index) => (
                    <div className="navItem" key={index}>
                        <button
                            className={item.className}
                            onClick={() => {
                                if (item.dropdown) return;

                                if (item.isExternal) {
                                    window.open(item.path, "_blank");
                                } else {
                                    navigate(item.path);
                                }
                            }}
                        >
                            {item.title}
                        </button>
                        {
                            item.dropdown && (
                                <ChevronDown className={'downSVG'} size={20}></ChevronDown>
                            )
                        }

                        {item.dropdown && (
                            <div className="dropDown">
                                {item.dropdown.map((it, ind) => (
                                    <div className={"btnWrap"}>
                                        <button
                                            className="dropB"
                                            key={ind}
                                            onClick={() => navigate(it.path)}
                                        >
                                            {it.title}
                                        </button>

                                        {it.children && (
                                            <div className={"subDrop"}>
                                                {it.children.map((iiit, inddd) => (
                                                    <button className={"dropB"} key={inddd} onClick={() => {navigate(iiit.path)}}>{iiit.title}</button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavBar;