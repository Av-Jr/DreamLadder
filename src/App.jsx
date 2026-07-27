import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Home from "./Home.jsx";
import ScrollToTop from "./ExtraPages/ScrollToTop.jsx";

// Lazy-loaded pages
const Faqs = lazy(() => import("./ExtraPages/Faqs/Faqs.jsx"));
const CalcGraph = lazy(() => import("./ExtraPages/CalcGraph/CalcGraph.jsx"));
const About = lazy(() => import("./ExtraPages/About/About.jsx"));
const Wws = lazy(() => import("./ExtraPages/WhoWeServe/Wws.jsx"));
const MFs = lazy(() => import("./ExtraPages/MFs/MFs.jsx"));
const PMSAIF = lazy(() => import("./ExtraPages/PMSAIF/PMSAIF.jsx"));
const Bonds = lazy(() => import("./ExtraPages/Bonds/Bonds.jsx"));
const StructProd = lazy(() => import("./ExtraPages/StructProd/StructProd.jsx"));
const LEP = lazy(() => import("./ExtraPages/LEP/LEP.jsx"));
const Insurance = lazy(() => import("./ExtraPages/Insurance/Insurance.jsx"));
const Connect = lazy(() => import("./ExtraPages/ConnectUs/Connect.jsx"));
const Bp = lazy(() => import("./ExtraPages/Bp/Bp.jsx"));
const Blogs = lazy(() => import("./ExtraPages/Blogs/Blogs.jsx"));
const Media = lazy(() => import("./ExtraPages/Media/Media.jsx"));
const Disclosure = lazy(() => import("./ExtraPages/Disclosure/Disclosure.jsx"));
const Disclaimer = lazy(() => import("./ExtraPages/Disclaimer/Disclaimer.jsx"));
const PrivacyPolicy = lazy(() => import("./ExtraPages/PrivacyPolicy/PrivacyPolicy.jsx"));

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/faqs" element={<Faqs />} />
                    <Route path="/calc" element={<CalcGraph />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/who-we-serve" element={<Wws />} />
                    <Route path="/mutual-funds" element={<MFs />} />
                    <Route path="/pms" element={<PMSAIF />} />
                    <Route path="/bonds" element={<Bonds />} />
                    <Route path="/structured-products" element={<StructProd />} />
                    <Route path="/legacy-estate-planning" element={<LEP />} />
                    <Route path="/Insurance" element={<Insurance />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="/bespoke-portfolio" element={<Bp />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/disclosure" element={<Disclosure />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;