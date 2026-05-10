import {BrowserRouter, Routes, Route} from "react-router-dom";
import Faqs from "./ExtraPages/Faqs/Faqs.jsx";
import CalcGraph from "./ExtraPages/CalcGraph/CalcGraph.jsx";
import Home from "./Home.jsx";
import About from "./ExtraPages/About/About.jsx";
import Wws from "./ExtraPages/WhoWeServe/Wws.jsx"
import MFs from "./ExtraPages/MFs/MFs.jsx";



const App = () => {
  return(
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home />}></Route>
                  <Route path={'/faqs'} element={<Faqs />}></Route>
                  <Route path={'/calc'} element={<CalcGraph></CalcGraph>}></Route>
                  <Route path={"/about"} element={<About></About>}></Route>
                  <Route path={"/who-we-serve"} element={<Wws />}></Route>
                  <Route path={"/mutual-funds"} element={<MFs></MFs>}></Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}


export default App;