import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import SlideShow from "./LandingPage/2.SlideShow/SlideShow.jsx";
import About from "./LandingPage/3.About/About.jsx";
import Calculator from "./LandingPage/5.Calculator/Calculator.jsx";
import Pow from "./LandingPage/7.POW/Pow.jsx";
import Footer from "./LandingPage/8.Footers/Footer.jsx";
import ReturnSlider from "./LandingPage/4.ReturnSlider/ReturnSlider.jsx";
import Ql from "./LandingPage/9.QuickLinks/Ql.jsx";

import "./App.scss";

const Insights = lazy(() => import("./LandingPage/6.Insights/Insights.jsx"));

export default function Home() {
    const [showInsights, setShowInsights] = useState(false);
    const insightsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowInsights(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: "300px",
            }
        );

        if (insightsRef.current) {
            observer.observe(insightsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div id="AppMC">
            <SlideShow />
            <About />
            <ReturnSlider />
            <Calculator />

            <div ref={insightsRef}>
                {showInsights && (
                    <Suspense fallback={null}>
                        <Insights />
                    </Suspense>
                )}
            </div>

            <Pow />
            <Footer />
            <Ql />
        </div>
    );
}