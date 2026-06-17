import "./Calculator.scss";
import {useNavigate} from "react-router-dom";
import {img} from "../../utils/image.js";



const Calculator = () => {
    const retData = [
            { i: "one",   t: "LumpSum",     id: "onetime" },
            { i: "two",   t: "SIP",         id: "sip" },
            { i: "three", t: "SIP Step Up", id: "sip" },
            { i: "four",  t: "SIP Delay",   id: "sip" },
            { i: "five",  t: "Retirement",  id: "retirement" },
            { i: "six",   t: "Marriage",    id: "marriage" },
            { i: "seven", t: "Education",   id: "education" },
            { i: "eight", t: "EMI / Loan",  id: "sip" } // only if you create this tab

    ]
    const nt = useNavigate();

    return(
        <div id={"CalculatorMC"}>
            <h2 className={"Syn dark"}>Calculators</h2>
            <div className="CalcEleCon">
                {retData.map((item, index) => (
                    <div key={index} className="CalcEle" onClick={() => {window.location.href = `/calc?tab=${item.id}`}}>
                        <img loading="lazy" src={img(`Calc${item.i}`)} alt={item.i} />
                        <h3 className={"Gen light"}>{item.t}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Calculator;