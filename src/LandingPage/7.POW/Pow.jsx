import "./Pow.scss"
import { useState, useEffect } from "react"
import { img } from "../../utils/image.js"
import { Quote } from "lucide-react";

const Pow = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const userInfo = [
    {
      name: "Puja Rai",
      position: "CXO & Author | Mumbai",
      statement:
          "Associated with DreamLadder Capital since inception, I value their disciplined asset allocation, consistent reviews, and transparent communication that bring clarity and confidence to my investments.",
      image: "POWPuja",
    },
    {
      name: "Ravi Shekhar",
      position: "Radiologist & HOD | NCR",
      statement:
          "What I appreciate most is their focus on long-term wealth creation rather than short-term noise. The team ensures my portfolio remains aligned with my financial goals and life stage.",
      image: "POWRavi",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % userInfo.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
      <div id="PowMC">
        <div className="containingCon">
          <h1 className={"Gen dark small"}>What Clients say about us</h1>
          <div className={'purpleLine'}></div>

          <div className="contentRow">
            <img
                loading="lazy"
                className="sideImg"
                src={img("POWwomen")}
                alt=""
            />

            <div className="sliderEE">
              <div
                  className="trackEE"
                  style={{
                    transform: `translateX(-${activeSlide * 100}%)`
                  }}
              >
                {userInfo.map((item, index) => (
                    <div key={index} className="slideEE">
                      <div className="cardEE">
                        <div className="textEE">
                          <Quote size={48} color="#D8C2F0" />
                          <span className="statementEE Gen small bold ju">
                            "{item.statement}"
                          </span>

                          <h2 className={"Gen bold dark"}>{item.name}</h2>

                          <h3 className={"Gen"}>{item.position}</h3>
                        </div>

                        <div className="imageEE">
                          <img
                              loading="lazy"
                              src={img(item.image)}
                              alt={item.name}
                          />
                        </div>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Pow