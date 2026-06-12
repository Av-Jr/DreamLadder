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
                <h1>Time Reveals the True Wealth Builder</h1>
                <h2>Compounding Power over 25 years.</h2>

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
                        <span>₹</span>

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

                    <span>
                        <p>Rs 500</p>
                        <p>
                            {state === "Monthly"
                                ? "Rs 5 Lakh"
                                : "Rs 1 Cr"}
                        </p>
                    </span>

                </div>
            </div>

            <div className="childsR two">
                <h2>After 25 years, it would have accumulated to</h2>

                <div className="retElesCon">
                    {returnsData.map((item) => (
                        <div className="retEle" key={item.id}>

                            <div className="retCircle">

                                <h2 className={"priceTag"}>
                                    ₹
                                    {formatAmount(
                                        calculateReturn(
                                            valS,
                                            item.rate,
                                            state
                                        )
                                    )}
                                </h2>

                                <div className="imgPart">
                                    <img
                                        loading="lazy"
                                        src={img(`imgPart${item.img}`)}
                                        alt={item.tag}
                                    />
                                </div>

                                <h3>{item.tag}</h3>

                            </div>

                            <div className="retBadge">
                                @{item.rate}% Return
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ReturnSlider;