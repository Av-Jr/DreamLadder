import {BrowserRouter, Routes, Route} from "react-router-dom";
import Faqs from "./ExtraPages/Faqs/Faqs.jsx";
import CalcGraph from "./ExtraPages/CalcGraph/CalcGraph.jsx";
import Home from "./Home.jsx";



const App = () => {
  return(
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home />}></Route>
                  <Route path={'/faqs'} element={<Faqs />}></Route>
                  <Route path={'/calc'} element={<CalcGraph></CalcGraph>}></Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}


export default App;