import NavBar from "./LandingPage/1.NavBar/NavBar.jsx"
import SlideShow from "./LandingPage/2.SlideShow/SlideShow.jsx"
import About from "./LandingPage/3.About/About.jsx"
import "./App.css"

const App = () => {
  return(
      <>
          <NavBar></NavBar>
          <div id = "AppMC">
                <SlideShow></SlideShow>
              <About></About>
          </div>
      </>
  )
}


export default App;