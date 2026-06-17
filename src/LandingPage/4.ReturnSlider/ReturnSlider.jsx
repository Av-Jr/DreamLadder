import "./ReturnSlider.scss";
import { useState } from "react";
import { img } from "../../utils/image.js";

const ReturnSlider = () => {
    const calculateReturn = (amount, rate, state) => {
        if (state === "Yearly") {
            return amount * Math.pow(1 + rate / 100, 25);
        }

        const monthlyRate = rate / 100 / 12;
        const months = 25 * 12;

        return (
            amount *
            ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
            (1 + monthlyRate)
        );
    };

    const formatAmount = (value) => {
        return (value / 10000000).toFixed(2) + " CR";
    };

    const [state, setState] = useState("Monthly");
    const [valS, changeVal] = useState(50000);

    const returnsData = [
        { id: 1, img: "one", tag: "FD", rate: 7 },
        { id: 2, img: "two", tag: "Bonds", rate: 8 },
        { id: 3, img: "three", tag: "Real Estate", rate: 10 },
        { id: 4, img: "four", tag: "Gold", rate: 11 },
        { id: 5, img: "five", tag: "Equity", rate: 15 }
    ];

    const ChangeState = (stateC) => {
        if (stateC === "Yearly") {
            changeVal(1000000);
        } else {
            changeVal(50000);
        }

        setState(stateC);
    };

    return (
        <div id="ReturnSliderMC">

            <div className="childsR one">
                <h2 className={"Syn"}>Time Reveals the True Wealth Builder</h2>
                <h3 className={"Syn"}>Compounding Power over 25 years.</h3>

                <div className="SliderCon">

                    <div className="stateBtns">
                        <button
                            className={`navBtn ${state === "Monthly" ? "s" : ""}`}
                            onClick={() => ChangeState("Monthly")}
                        >
                            Monthly (SIP)
                        </button>

                        <button
                            className={`navBtn ${state === "Yearly" ? "s" : ""}`}
                            onClick={() => ChangeState("Yearly")}
                        >
                            One-Time
                        </button>
                    </div>

                    <div className="inputWrap">
                        <span className={"Gen bold dark"}>₹</span>

                        <input
                            id="SCMC"
                            type="number"
                            min={500}
                            max={state === "Monthly" ? 500000 : 10000000}
                            value={valS}
                            onChange={(e) => {
                                changeVal(Number(e.target.value));
                            }}
                        />
                    </div>

                    <input
                        type="range"
                        min="500"
                        value={valS}
                        max={state === "Monthly" ? "500000" : "10000000"}
                        className="SliderInp"
                        onChange={(e) => {
                            changeVal(Number(e.target.value));
                        }}
                    />

                    <span  className={"Gen dark eleList"}>
                        <h3 className={"Gen light"}>Rs 500</h3>
                        <h3>
                            {state === "Monthly"
                                ? "Rs 5 Lakh"
                                : "Rs 1 Cr"}
                        </h3>
                    </span>

                </div>
            </div>

            <div className="childsR two">
                <h3 className={"Gen"}>After 25 years, it would have accumulated to</h3>

                <div className="retElesCon">
                    {returnsData.map((item) => (
                        <div className="retEle" key={item.id}>

                            <div className="retCircle">

                                <h3 className={"Gen bold light"}>
                                    ₹
                                    {formatAmount(
                                        calculateReturn(
                                            valS,
                                            item.rate,
                                            state
                                        )
                                    )}
                                </h3>

                                <div className="imgPart">
                                    <img
                                        loading="lazy"
                                        src={img(`imgPart${item.img}`)}
                                        alt={item.tag}
                                    />
                                </div>

                                <h3 className={"Gen light"}>{item.tag}</h3>

                            </div>

                            <div className="retBadge">
                                <h3 className={"Gen dark"}>@{item.rate}% Return</h3>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ReturnSlider;