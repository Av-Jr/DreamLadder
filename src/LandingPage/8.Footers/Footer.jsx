import "./Footer.scss"
import {useNavigate} from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

const titles = [
  "OUR COMPANY",
  "EQUITY",
  "INVESTMENT",
  "MUTUAL FUNDS",
  "INSURANCE",
  "STRUCTURED PRODUCTS",
  "PMS / AIF",
  "LEGACY PLANNING",
  "PAYMENT RELATED",
  "ACCOUNT CREATION",
  "NRI / OCI",
  "INDIANS IN US / CANADA",
  "REGULATIONS & COMPLIANCE",
  "TAXATION & RETURNS",
  "DIGITAL SECURITY / CYBER SAFETY",
  "CUSTOMER SUPPORT"
];

    return(
        <div id={"FooterMC"}>
            <h1>Frequently Asked Questions</h1>
            <h3>Select a topic below to find quick answers.</h3>
            <div className="topicEles">
                {titles.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    window.location.href = "/faqs";
                  }}
                >
                  {item}
                </div>
                ))}
            </div>
        </div>
    )
}

export default Footer;