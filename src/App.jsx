import {BrowserRouter, Routes, Route} from "react-router-dom";
import Faqs from "./ExtraPages/Faqs/Faqs.jsx";
import Home from "./Home.jsx";



const App = () => {
  return(
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={"/"} element={<Home />}></Route>
                  <Route path={'/faqs'} element={<Faqs />}></Route>
              </Routes>
          </BrowserRouter>
      </>
  )
}


export default App;