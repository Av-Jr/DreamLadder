import "./ReturnSlider.scss";
import {useState, useEffect} from 'react';


const ReturnSlider = () => {
    const [state, setState] = useState("Monthly");
    const [valS, changeVal] = useState(500);
    const returnsData = [
      { id: 1, img: "one", amt: 4.07, tag: "FD", rate: 7 },
      { id: 2, img: "two", amt: 4.79, tag: "Bonds", rate: 8 },
      { id: 3, img: "three", amt: 6.69, tag: "Real Estate", rate: 10 },
      { id: 4, img: "four", amt: 7.95, tag: "Gold", rate: 11 },
      { id: 5, img: "five", amt: 16.42, tag: "Equity", rate: 15 }
    ];

    const ChangeState = (stateC) => {
        if (state !== stateC) {
            changeVal(500);
            setState(stateC);
        }
    }



    return (
        <div id={"ReturnSliderMC"}>
            <div className="childsR one">
                <span>
                    <h2>Time Reveals the True Wealth Builder</h2>
                    <h3>Compounding Power over 25 years.</h3>
                </span>
                <div className="SliderCon">
                    <div className="stateBtns">
                        <button className={`StateBtnC ${state === "Monthly" ? "active" : ""}`}
                                onClick={() => ChangeState("Monthly")}>Monthly(SIP)
                        </button>
                        <button className={`StateBtnC ${state === "Yearly" ? "active" : ""}`}
                                onClick={() => ChangeState("Yearly")}>One-Time
                        </button>
                    </div>
                    <div id={"SCMC"}>{`₹ ${valS.toLocaleString("en-IN")}`}</div>
                    <input type="range" min="500" value={valS} max={state === "Monthly" ? "500000" : "10000000"}
                           className="SliderInp" onChange={(e) => {
                        changeVal(Number(e.target.value))
                    }}/>
                    <span><p>₹500</p><p>{(state === "Monthly") ? "₹5 Lakh" : "₹1 Cr"}</p></span>
                </div>
            </div>

            <div className="childsR two">
              <h3>After 25 years, it would have accumulated to</h3>

              <div className="retElesCon">
                {returnsData.map((item) => (
                  <div className="retEle" key={item.id}>
                    <div className="retCircle">
                      <h2>{`₹${item.amt} CR`}</h2>
                      <div className="imgPart">
                        <img
                          src={`/imgPart${item.img}.png`}
                          alt={item.tag}
                        />
                      </div>
                      <h3>{item.tag}</h3>
                    </div>

                    <div className="retBadge">
                      {`@${item.rate}% Return`}
                    </div>
                  </div>
                ))}
              </div>
            </div>

        </div>
    )
}

export default ReturnSlider;