import "./SlideShow.scss";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {img} from "../../utils/image.js";
import NavBar from "../1.NavBar/NavBar.jsx";
import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react";

const SlideShow = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [animate, setAnimate] = useState(true);
    const[reset, setReset] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prev) => prev + 1);
      }, 8000);

      return () => clearInterval(interval);
    }, [reset]);

    useEffect(() => {
      if (activeSlide === 2) {
        setTimeout(() => {
          setAnimate(false);
          setActiveSlide(0);
        }, 800);

        setTimeout(() => {
          setAnimate(true);
        }, 850);
      }
    }, [activeSlide]);

    const nav = useNavigate();

  return (
    <div id="SlideShowMC">
      <NavBar></NavBar>
      <div className="SlideTrack"   style={{
    transform: `translateX(-${activeSlide * 100}vw)`,
    transition: animate ? "transform .8s ease" : "none"
  }}>
        <div className="SlideItem">
          <div className="SlideOne">
            <div className="heroCon">
              <h2 className={"Syn dark"}>
                Building Wealth,
                <br />
                Preserving Legacies
              </h2>

              <div className="heroActions">
                <button className="ss" onClick={() => {nav("/blogs")}}><BookOpen size={16}/>Learning</button>
                <button className="ss" onClick={() => {window.open("https://calendly.com/dreamladdercapital/portfolio-discussion-meeting", "_blank")}}><Calendar size={16}/>Book my Appointment</button>
              </div>
            </div>

            <div className="heroImg">
              <img fetchPriority="high" src={img("HP3")} alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>

        <div className="SlideItem">
          <div className="SlideTwo">
            <div className="heroCon">
              <h2 className={"Syn dark"}>
                Smarter Investing -
                <br />
                Right in your pocket.
              </h2>

              <h2 className={'Syn dark small'}>Download the App right now.</h2>

              <div className="heroActions pas">
                <button className="navBtn s ps" onClick={() => window.open("https://play.google.com/store/search?q=dreamladder+capital&c=apps&hl=en_IN", "_blank")}>
                  <img src={img("gplay")} alt=""/>
                </button>
                <button className="navBtn s as" onClick={() => window.open("https://apps.apple.com/in/app/dreamladder-capital/id1527793478", "_blank")}>
                  <img  src={img("appStore")} alt=""/>
                </button>
              </div>

              <div className="infoDis">
                <div className="conInfo">
                  <span className="Gen light">500+</span>
                  <span className="Gen small">Families</span>
                </div>

                <div className="conInfo">
                  <span className="Gen light">12+</span>
                  <span className="Gen light small">Countries</span>
                </div>

                <div className="conInfo">
                  <span className="Gen light">25+</span>
                  <span className="Gen light small">Experience</span>
                </div>
              </div>
            </div>

            <div className="heroImg">
              <img className={"BigImg"} fetchPriority="high" src={img("Slide2")} alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>

        <div className="SlideItem">
          <div className="SlideOne">
            <div className="heroCon">
              <h2 className={"Syn dark"}>
                Building Wealth,
                <br />
                Preserving Legacies
              </h2>

              <div className="heroActions">
                <button className="ss" onClick={() => {window.location.href = "/blogs"}}><BookOpen size={16}/>Learning</button>
                <button className="ss" onClick={() => {window.location.href = "https://calendly.com/dreamladdercapital/portfolio-discussion-meeting"}}><Calendar size={16}/>Book my Appointment</button>
              </div>
            </div>

            <div className="heroImg">
              <img fetchPriority="high" src={img("HP3")} alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>
      </div>
      <button
          className="slideArrow left"
          onClick={() =>
          {
              setActiveSlide((prev) => (prev === 0 ? 1 : prev - 1));
              setReset(prev => prev + 1);
          }
          }
      >
        <ChevronLeft size={30} className={"NAVarrow"}/>
      </button>

      <button
          className="slideArrow right"
          onClick={() => {
              setActiveSlide((prev) => (prev === 1 ? 0 : prev + 1));
              setReset(prev => prev + 1);
          }
          }
      >
        <ChevronRight size={30} className={"NAVarrow"}/>
      </button>
    </div>
  );
};

export default SlideShow;