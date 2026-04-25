import "./SlideShow.scss";
import {useState, useEffect} from "react";

const SlideShow = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((prev) => prev + 1);
      }, 5000);

      return () => clearInterval(interval);
    }, []);

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

  return (
    <div id="SlideShowMC">
      <div className="SlideTrack"   style={{
    transform: `translateX(-${activeSlide * 100}vw)`,
    transition: animate ? "transform .8s ease" : "none"
  }}>
        <div className="SlideItem">
          <div className="SlideOne">
            <div className="heroCon">
              <h1>
                Building Wealth,
                <br />
                Preserving Legacies
              </h1>

              <div className="heroActions">
                <button className="navBtn s">Learning</button>
                <button className="navBtn s">Book my Appointment</button>
              </div>
            </div>

            <div className="heroImg">
              <img src="/HP3.png" alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>

        <div className="SlideItem">
          <div className="SlideTwo">
            <div className="heroCon">
              <h1>
                Smart Investing -
                <br />
                Right in your pocket.
              </h1>

              <h2>Download the App right now.</h2>

              <div className="heroActions">
                <button className="navBtn s">Play-Store</button>
                <button className="navBtn s">App-Store</button>
              </div>

              <div className="infoDis">
                <div className="conInfo">
                  500+
                  <br />
                  Families
                </div>

                <div className="conInfo">
                  12+
                  <br />
                  Countries
                </div>

                <div className="conInfo">
                  25+
                  <br />
                  Experience
                </div>
              </div>
            </div>

            <div className="heroImg">
              <img src="/HP3.png" alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>

        <div className="SlideItem">
          <div className="SlideOne">
            <div className="heroCon">
              <h1>
                Building Wealth,
                <br />
                Preserving Legacies
              </h1>

              <div className="heroActions">
                <button className="navBtn s">Learning</button>
                <button className="navBtn s">Book my Appointment</button>
              </div>
            </div>

            <div className="heroImg">
              <img src="/HP3.png" alt="Wealth advisory hero visual" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SlideShow;