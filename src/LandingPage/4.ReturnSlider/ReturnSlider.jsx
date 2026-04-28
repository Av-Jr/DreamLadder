
import "./ReturnSlider.scss";
import {useState, useEffect} from 'react';


const ReturnSlider = () => {
    const [state, setState] = useState("Monthly");
    const [valS, changeVal] = useState(500);

    const ChangeState = (stateC) =>{
        if(state !== stateC){
            changeVal(500);
            setState(stateC);
        }
    }


    return(
        <div id={"ReturnSliderMC"}>
            <div className="childsR one">
                <span>
                    <h2>Time Reveals the True Wealth Builder</h2>
                    <h3>Compounding Power over 25 years.</h3>
                </span>
                <div className="SliderCon">
                    <div className="stateBtns">
                        <button className={`StateBtnC ${state === "Monthly"?"active" : ""}`} onClick = {() => ChangeState("Monthly")}>Monthly(SIP)</button>
                        <button className={`StateBtnC ${state === "Yearly"?"active" : ""}`} onClick = {() => ChangeState("Yearly")}>One-Time</button>
                    </div>
                    <div id={"SCMC"}>{`₹ ${valS.toLocaleString("en-IN")}`}</div>
                    <input type="range" min="500" value = {valS} max={state === "Monthly" ? "500000" : "10000000"} className="SliderInp" onChange = {(e) => {changeVal(Number(e.target.value))}}/>
                    <span><p>₹500</p><p>{(state === "Monthly") ? "₹5 Lakh" : "₹1 Cr"}</p></span>
                </div>
            </div>
            <div className="childsR two"></div>

        </div>
    )
}

export default ReturnSlider;