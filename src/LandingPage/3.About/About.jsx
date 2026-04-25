import "./About.scss";
import { useState, useEffect, useRef } from "react";

const About = () => {
  const slides = ["gg", "hh"];

  const fakeSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ];

  const [currSlide, changeSlide] = useState(1);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide((prev) => prev + 1);
      setAnimate(true);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    if (currSlide === fakeSlides.length - 1) {
      setAnimate(false);
      changeSlide(1);
    }
  };

  return (
    <div id="AboutMC">
      <div className="slidSh">
        <div
          className="track"
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${currSlide * 100}%)`,
            transition: animate ? "transform 0.8s ease" : "none"
          }}
        >
          {fakeSlides.map((item, index) => (
            <div className="slideCon" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;