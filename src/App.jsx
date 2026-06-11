import {BrowserRouter, Routes, Route} from "react-router-dom";
import Faqs from "./ExtraPages/Faqs/Faqs.jsx";
import CalcGraph from "./ExtraPages/CalcGraph/CalcGraph.jsx";
import Home from "./Home.jsx";
import About from "./ExtraPages/About/About.jsx";
import Wws from "./ExtraPages/WhoWeServe/Wws.jsx"
import MFs from "./ExtraPages/MFs/MFs.jsx";
import PMSAIF from "./ExtraPages/PMSAIF/PMSAIF.jsx"
import Bonds from "./ExtraPages/Bonds/Bonds.jsx";
import StructProd from "./ExtraPages/StructProd/StructProd.jsx";
import LEP from "./ExtraPages/LEP/LEP.jsx";
import Insurance from "./ExtraPages/Insurance/Insurance.jsx";
import Connect from "./ExtraPages/ConnectUs/Connect.jsx";
import Bp from "./ExtraPages/Bp/Bp.jsx";
import Blogs from "./ExtraPages/Blogs/Blogs.jsx";
import Media from "./ExtraPages/Media/Media.jsx";
import Disclosure from "./ExtraPages/Disclosure/Disclosure.jsx";
import Disclaimer from "./ExtraPages/Disclaimer/Disclaimer.jsx";
import PrivacyPolicy from "./ExtraPages/PrivacyPolicy/PrivacyPolicy.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 import ScrollToTop from "./ExtraPages/ScrollToTop.jsx";

const App = () => {
  return(
      <>
          <BrowserRouter>
              <ScrollToTop></ScrollToTop>
              <Routes>
                  <Route path={"/"} element={<Home />}></Route>
                  <Route path={'/faqs'} element={<Faqs />}></Route>
                  <Route path={'/calc'} element={<CalcGraph></CalcGraph>}></Route>
                  <Route path={"/about"} element={<About></About>}></Route>
                  <Route path={"/who-we-serve"} element={<Wws />}></Route>
                  <Route path={"/mutual-funds"} element={<MFs></MFs>}></Route>
                  <Route path={"/pms"} element={<PMSAIF/>}></Route>
                  <Route path={"/bonds"} element={<Bonds />}></Route>
                  <Route path={"/structured-products"} element={<StructProd />}></Route>
                  <Route path={"/legacy-estate-planning"} element={<LEP />}></Route>
                  <Route path={"/Insurance"} element={<Insurance />}></Route>
                  <Route path={"/connect"} element={<Connect></Connect>}></Route>
                  <Route path={"/bespoke-portfolio"} element={<Bp />}></Route>
                  <Route path={'/blogs'} element={<Blogs />}></Route>
                  <Route path={'/media'} element={<Media />}></Route>
                  <Route path={'/disclosure'} element={<Disclosure />}></Route>
                  <Route path={'/disclaimer'} element={<Disclaimer />}></Route>
                  <Route path={'/privacy-policy'} element={<PrivacyPolicy />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}


export default App;