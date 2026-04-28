import "./Calculator.scss";

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

    return(
        <div id={"CalculatorMC"}>
            <h2>Calculators</h2>
            <div className="CalcEleCon">
                {retData.map((item, index) => (
                    <div className="CalcEle">
                        <img src={`/Calc${item.i}.png`} alt={item.i}/>
                        <h3>{item.t}</h3>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Calculator;