import "./Calculator.scss";
import {useNavigate} from "react-router-dom";
import {img} from "../../utils/image.js";



const Calculator = () => {
    const retData = [
        {i : "one", t:"Lumpsum"},
        {i : "two", t : "SIP"},
        {i : "three", t : "SIP Step Up"},
        {i : "four", t : "SIP Delay"},
        {i : "five", t : "Retirement"},
        {i : "six", t : "Marriage"},
        {i : "seven", t : "Education"},
        {i : "eight", t : "EMI / Loan"}
    ]
    const nt = useNavigate();

    return(
        <div id={"CalculatorMC"}>
            <h2>Calculators</h2>
            <div className="CalcEleCon">
                {retData.map((item, index) => (
                    <div key={index} className="CalcEle" onClick={() => {window.location.href = "/calc"}}>
                        <img loading="lazy" src={img(`Calc${item.i}`)} alt={item.i} />
                        <h3>{item.t}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Calculator;