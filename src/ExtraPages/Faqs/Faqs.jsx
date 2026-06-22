import "./Faqs.scss";
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";
import React, { useState } from "react";

const dataQ = [
{
  title: "OUR COMPANY",

  qa: [

    {
      q: "Who is DreamLadder Capital, and what makes us different from other financial advisors?",

      a: "DreamLadder Capital is an AMFI-registered Mutual Fund Distributor and an APMI-registered PMS Distribution entity offering solutions across mutual funds, equities, PMS, AIFs, insurance, and legacy planning. What sets us apart is our focus on disciplined portfolio construction, goal-based investing, and long-term wealth creation, supported by strong governance and a client-first approach."
    },

    {
      q: "Are you SEBI regulated?",

      a: "Yes. DreamLadder Capital operates fully within the SEBI regulatory framework. We are AMFI-registered mutual fund distributors and APMI-registered PMS distributors. All products and services are offered through SEBI-registered and regulated entities, ensuring compliance, transparency, and investor protection."
    },

    {
      q: "How do you ensure the safety of client investments?",

      a: "We operate only through regulated platforms and follow robust security protocols, including bank-grade encryption, multi-factor authentication, and periodic system audits, to safeguard client data and transactions."
    },

    {
      q: "What kind of clients do you serve?",

      a: "We work with individuals, families, HNIs, NRIs/OCIs, and corporates, offering structured solutions suited to diverse financial needs and objectives."
    },

    {
      q: "How do I get started with DreamLadder Capital?",

      a: "Getting started is simple—complete your KYC, onboard through our platform, and our team will assist you through each step of the investment process."
    }

  ]
},
{
  title: "EQUITY",
  qa: [
    {
      q: "What is equity investment and how does it work?",
      a: "Equity investing involves buying shares of companies to participate in their growth and earnings. While returns can be higher over time, equity investments are subject to market fluctuations."
    },
    {
      q: "How do you structure client portfolios?",
      a: "Client portfolios are structured based on individual risk profiles, financial goals, investment horizon, and liquidity needs. We facilitate allocation across suitable investment products such as mutual funds, PMS, AIFs, and other financial instruments through a disciplined asset allocation framework focused on long-term wealth creation."
    },
    {
      q: "What are the risks involved in equity investing?",
      a: "Equity investments are exposed to market volatility and price movements. However, over the long term, equities have the potential to deliver superior returns compared to many other asset classes."
    },
    {
      q: "Is there a minimum amount required to start investing in equities?",
      a: "Yes. Equity investments through PMS and AIF structures are subject to the minimum investment limits prescribed by SEBI for these products."
    },
    {
      q: "How does DreamLadder Capital monitor equity portfolios?",
      a: "Equity portfolios are managed and monitored by the respective fund managers of the PMS and AIF strategies selected by the client. DreamLadder Capital facilitates periodic reviews, reporting, and communication to help clients track portfolio progress and stay aligned with their long-term objectives."
    }
  ]
},
{
  title: "INVESTMENT",
  qa: [
    {
      q: "What investment options are available with DreamLadder Capital?",
      a: "We facilitate access to a wide range of investment products, including mutual funds, equities, PMS, AIFs, insurance, structured products, and legacy planning solutions, through regulated platforms and entities."
    },
    {
      q: "How is my risk profile understood before investing?",
      a: "Your financial objectives, investment horizon, and risk preferences are understood through structured discussions and standard risk-profiling frameworks to help align suitable investment options."
    },
    {
      q: "Can I invest online through your platform?",
      a: "Yes. Our platform supports secure, fully digital onboarding and transaction execution, with assistance available throughout the process."
    },
    {
      q: "How often should investments be reviewed?",
      a: "Periodic reviews—typically on a quarterly basis—help track progress and ensure alignment with changing market conditions and personal circumstances."
    }
  ]
},
{
  title: "MUTUAL FUNDS",
  qa: [
    {
      q: "What are mutual funds, and how do they work?",
      a: "Mutual funds pool money from investors to invest in stocks, bonds, or other assets, managed by professional fund managers."
    },
    {
      q: "What is the difference between SIP (Systematic Investment Plan) and lump sum investment?",
      a: "Lump Sum: Invest a larger amount at once (works best when markets are favorable). SIP: Invest small, fixed amounts regularly (disciplined approach)."
    },
    {
      q: "How do I choose the right mutual fund scheme?",
      a: "The right scheme depends on your financial goals, risk appetite, and time horizon. Our advisors help you pick the best fit."
    },
    {
      q: "Are there any lock-in periods or exit loads in mutual funds?",
      a: "ELSS funds have a 3-year lock-in. Some funds may have exit loads if redeemed within a certain period."
    },
    {
      q: "How are mutual fund returns taxed?",
      a: "Equity funds: Short-term gains (<1 year) taxed at 20%, long-term gains (>1 year) taxed at 12.5% above ₹1.25 lakh. Debt funds: Taxed as per your income slab."
    }
  ]
},
{
  title: "INSURANCE",
  qa: [
    {
      q: "What types of insurance plans are available through DreamLadder Capital?",
      a: "We facilitate access to term, health, life, and investment-linked insurance plans offered by leading, regulated insurers."
    },
    {
      q: "How is the required insurance coverage determined?",
      a: "Coverage needs are understood based on factors such as income, liabilities, family responsibilities, and long-term financial objectives, using standard assessment frameworks."
    },
    {
      q: "What is the difference between term insurance and investment-linked insurance?",
      a: "Term Insurance: Provides pure life cover with high protection at a relatively low cost. Investment-Linked Insurance: Combines insurance protection with a savings or investment component."
    },
    {
      q: "How does the claim settlement process work?",
      a: "In the event of a claim, the policyholder or nominee submits the required documents directly to the insurer. DreamLadder Capital assists with coordination and follow-ups to help ensure a smooth and timely settlement process."
    }
  ]
},
{
  title: "STRUCTURED PRODUCTS",
  qa: [
    {
      q: "What are structured products and who are they suitable for?",
      a: "Structured products are customised investment solutions that combine instruments such as equities, debt, and derivatives. They are generally suited for investors seeking defined payoff structures with a controlled risk profile, based on specific market outcomes."
    },
    {
      q: "How do structured products differ from mutual funds or PMS?",
      a: "Unlike mutual funds or PMS that follow market performance, structured products offer pre-defined payoffs linked to market conditions, giving risk-adjusted outcomes."
    },
    {
      q: "What are the risks and benefits of structured products?",
      a: "Benefits: Capital protection (in some products), tailored returns, diversification. Risks: Market dependency, complexity, and lower liquidity compared to traditional funds."
    },
    {
      q: "What is the minimum investment amount?",
      a: "Typically, structured products require a minimum investment of ₹25–50 lakhs, depending on the product."
    },
    {
      q: "Are structured products regulated in India?",
      a: "Yes. Structured products in India are regulated by SEBI and issued by authorized financial institutions."
    }
  ]
},
{
  title: "PMS / AIF",
  qa: [
    {
      q: "What is Portfolio Management Service (PMS), and how is it different from mutual funds?",
      a: "PMS offers personalized portfolios managed by experts, unlike mutual funds where money is pooled. PMS gives direct ownership of securities and higher customization."
    },
    {
      q: "What are Alternative Investment Funds (AIFs)?",
      a: "AIFs are privately pooled funds investing in assets like private equity, venture capital, hedge funds, or debt, designed for sophisticated investors."
    },
    {
      q: "Who is eligible to invest in PMS and AIF?",
      a: "High-net-worth individuals (HNIs) and institutions who meet SEBI’s eligibility and minimum investment criteria."
    },
    {
      q: "What is the minimum investment required?",
      a: "PMS: ₹50 lakhs | AIFs: ₹1 crore"
    },
    {
      q: "How does DreamLadder select PMS/AIF managers?",
      a: "We evaluate managers based on track record, investment philosophy, risk management, and alignment with client goals."
    }
  ]
},
{
  title: "LEGACY PLANNING",
  qa: [
    {
      q: "What is legacy planning, and why is it important?",
      a: "Legacy planning ensures that your wealth is transferred smoothly to the next generation in a structured and legally recognized manner. It helps minimize potential disputes, administrative delays, and tax inefficiencies while preserving family harmony."
    },
    {
      q: "How can DreamLadder assist with estate or succession planning?",
      a: "We facilitate coordination with legal and tax professionals for the creation of wills, trusts, nominee structures, and tax-efficient transfer mechanisms. Our role is to help structure your financial assets in alignment with your wishes and long-term family objectives."
    },
    {
      q: "Can NRIs/OCIS undertake legacy planning in India?",
      a: "Yes. NRIs and OCIs can structure the transfer of their Indian assets in accordance with applicable Indian laws. Cross-border considerations may require coordination with legal and tax professionals in relevant jurisdictions."
    },
    {
      q: "What is the difference between a will and a trust?",
      a: "A will becomes effective after the individual’s lifetime and may require probate in certain jurisdictions. A Trust can be structured to operate during one’s lifetime or thereafter and may offer greater control, continuity, and privacy in asset distribution."
    },
    {
      q: "How do taxes impact inheritance in India?",
      a: "Currently, India does not levy inheritance or estate tax. However, any income generated from inherited assets is taxable in the hands of the recipient as per applicable tax laws."
    }
  ]
},
{
  title: "PAYMENT RELATED",
  qa: [
    {
      q: "What payment methods are available for investment?",
      a: "Investments can be made through net banking, UPI, NEFT/RTGS, registered mandates, or cheques, depending on the product and platform used."
    },
    {
      q: "Is online payment secure?",
      a: "Yes. Transactions are processed through authorized banking channels and secure investment platforms with industry-standard encryption and regulatory safeguards."
    },
    {
      q: "Do you accept payments?",
      a: "We do not receive or hold client funds. For mutual fund transactions executed through the exchange platform, payments are routed directly from the investor’s registered bank account to the clearing corporation (ICCL), which subsequently settles funds with the respective AMCs. For PMS and AIF investments, payments are made directly by the investor to the respective fund house or portfolio manager, as per the prescribed process."
    },
    {
      q: "Are there any hidden charges or transaction fees?",
      a: "No. All applicable charges, commissions, or fees (where relevant) are transparently disclosed in accordance with regulatory requirements."
    }
  ]
},
{
  title: "ACCOUNT CREATION",
  qa: [
    {
      q: "How do I create an account with DreamLadder Capital?",
      a: "You can create an account by filling out a simple online application form on our website."
    },
    {
      q: "What documents are required for KYC?",
      a: "You’ll need PAN, Aadhaar, address proof, bank details, and a passport-size photo. NRIs require additional documents like passport and visa."
    },
    {
      q: "How long does the account opening process take?",
      a: "Usually 24–48 hours, once all documents are verified."
    },
    {
      q: "Can I open a joint investment account?",
      a: "Yes. We allow joint accounts with up to three holders."
    },
    {
      q: "Is account creation possible online, or do I need to visit physically?",
      a: "The process is 100% online—no physical visit required."
    }
  ]
},
{
  title: "NRI / OCI",
  qa: [
    {
      q: "Can NRIs/OCIS invest in Indian equities and mutual funds?",
      a: "Yes. NRIs/OCIS can invest in Indian equities, mutual funds, bonds, PMS, and AIFs under RBI and SEBI guidelines."
    },
    {
      q: "What accounts are required for NRI investing (NRE/NRO/FCNR)?",
      a: "NRE Account – Repatriable investments (funds transferable abroad). NRO Account – Non-repatriable Indian income (like rent/dividends). FCNR Account – Foreign currency deposits."
    },
    {
      q: "Are there any tax implications for NRIs investing in India?",
      a: "Yes. Capital gains and income are taxable in India, with provisions for DTAA (Double Taxation Avoidance Agreements) to prevent double taxation."
    },
    {
      q: "Can NRIs invest in PMS, AIF, or structured products?",
      a: "Yes. NRIs can invest, subject to eligibility and regulatory approvals for specific products."
    },
    {
      q: "How does DreamLadder assist NRIs in managing their wealth remotely?",
      a: "We support NRIs in managing their Indian investments by facilitating documentation, banking coordination, and compliance requirements, enabling seamless execution from abroad."
    }
  ]
},
{
  title: "INDIANS IN US / CANADA",
  qa: [
    {
      q: "Can Indians living in the US/Canada invest in Indian mutual funds?",
      a: "Yes, but options are limited as many AMCS restrict US/Canada investors due to compliance rules."
    },
    {
      q: "What are the regulatory restrictions for US/Canada residents?",
      a: "Investments must comply with FATCA (Foreign Account Tax Compliance Act) and Canadian regulatory norms, which restrict certain fund houses."
    },
    {
      q: "Do I need special documentation (like FATCA compliance)?",
      a: "Yes. You must complete FATCA/CRS declarations and provide proof of overseas residency."
    },
    {
      q: "What investment options are available for Indians in North America?",
      a: "Select mutual funds open to US/Canada investors. Direct equities through NRE/NRO accounts. PMS, AIF, and bonds (where regulations permit)."
    },
    {
      q: "How does DreamLadder ensure compliance with US/Canada tax rules?",
      a: "We conduct strict KYC checks, FATCA reporting, and tax-aligned structuring, ensuring your investments stay fully compliant."
    }
  ]
},
{
  title: "REGULATIONS & COMPLIANCE",
  qa: [
    {
      q: "Is DreamLadder Capital SEBI regulated?",
      a: "Yes. DreamLadder Capital operates fully within the SEBI regulatory framework. We are AMFI-registered mutual fund distributors and APMI-registered PMS distributors. All products and services are offered through SEBI-registered and regulated entities, ensuring compliance, transparency, and investor protection."
    },
    {
      q: "How do you ensure compliance with Indian financial regulations?",
      a: "We operate in accordance with SEBI, AMFI, APMI, and RBI guidelines, supported by internal compliance processes designed to maintain transparency, suitability, and regulatory adherence."
    },
    {
      q: "What safety measures protect my investments from fraud?",
      a: "Investor funds are held directly in the investor’s name with the respective AMCs, custodians, PMS, or AIF providers. DreamLadder Capital does not receive or hold client funds. Transactions are processed through authorized banking and regulated platforms."
    },
    {
      q: "How is investor grievance redressal handled?",
      a: "Clients may reach our designated support and compliance contact for assistance. Additionally, grievances related to mutual funds can be escalated through the SEBI SCORES platform, in accordance with regulatory procedures."
    },
    {
      q: "Do you provide audited performance reports?",
      a: "Yes. Transaction confirmations and portfolio statements are issued by the respective AMCs, PMS, or AIF providers. We facilitate consolidated portfolio reviews to help clients stay informed."
    }
  ]
},
{
  title: "TAXATION & RETURNS",
  qa: [
    {
      q: "How are equity and mutual fund gains taxed in India?",
      a: "Listed Equity Shares & Equity Mutual Funds: • Short-Term Capital Gains (≤1 year): 20% • Long-Term Capital Gains (>1 year): 12.5% on gains exceeding ₹1.25 lakh in a financial year. Debt Mutual Funds: • Capital gains are taxed as per the investor’s applicable income tax slab rate."
    },
    {
      q: "What is the difference between short-term and long-term capital gains?",
      a: "Short-Term: Holding ≤1 year (for equity). Taxed at higher rates. Long-Term: Holding >1 year (for equity). Taxed at concessional rates."
    },
    {
      q: "Are dividends taxable?",
      a: "Yes. Dividends from equities and mutual funds are taxed at your income slab rate."
    },
    {
      q: "How are NRIs/OCIs taxed on Indian investments?",
      a: "Capital gains on listed equity and mutual funds are taxed as per applicable Indian tax laws. Tax is generally deducted at source (TDS), and relief may be available under relevant Double Taxation Avoidance Agreements (DTAA), subject to eligibility."
    },
    {
      q: "Does DreamLadder provide tax planning and filing support?",
      a: "Yes. We provide tax-efficient strategies, investment structuring, and filing assistance through our expert partners."
    }
  ]
},
{
  title: "DIGITAL SECURITY / CYBER SAFETY",
  qa: [
    {
      q: "How safe is online investing through DreamLadder?",
      a: "Very safe. We use bank-grade encryption, secure servers, and regulatory compliance to protect your data and funds."
    },
    {
      q: "What cybersecurity measures protect my account?",
      a: "Your account is secured with encryption, firewalls, intrusion detection systems, and regular security audits."
    },
    {
      q: "How can I identify phishing or fake investment platforms?",
      a: "Always check for official domain (dreamladdercapital.com), SEBI registration, and secure HTTPS. Avoid clicking on suspicious links or sharing OTPs."
    },
    {
      q: "What should I do if I suspect fraud or hacking?",
      a: "Immediately freeze transactions, change passwords, and contact our support team. We also guide you on filing a cybercrime report if required."
    },
    {
      q: "Do you provide two-factor authentication (2FA)?",
      a: "Yes. 2FA is mandatory for account login and transactions, adding an extra layer of protection."
    }
  ]
},
{
  title: "CUSTOMER SUPPORT",
  qa: [
    {
      q: "What is the best way to reach customer support?",
      a: "You can reach us via email, phone, or live chat on our website."
    },
    {
      q: "Do you provide dedicated relationship managers?",
      a: "Yes. Premium clients get a dedicated relationship manager for personalized support."
    },
    {
      q: "What are your support timings?",
      a: "Our support team is available Monday–Saturday, 9:30 AM to 7:00 PM IST."
    },
    {
      q: "How quickly can I expect a response to queries?",
      a: "We usually respond within 24 hours for standard queries and within a few hours for urgent issues."
    },
    {
      q: "Do you provide portfolio reviews on request?",
      a: "Yes. We offer periodic and on-demand portfolio reviews to keep your investments aligned with goals."
    }
  ]
}
]

import "./Faqs.scss";

const Faqs = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (mainIndex, subIndex) => {
        const current = `${mainIndex}-${subIndex}`;

        setOpenIndex(prev =>
            prev === current ? null : current
        );
    };

    return (
        <>
        <div id={"FaqsMC"}>
          <div className="titleHeadZ">
            <NavBar></NavBar>
            <span className="titleZ">FAQ</span>
          </div>
            {
                dataQ.map((item, index) => (
                    <div className={"QuestCon"} key={index}>

                        <h2 className={"Syn small"}>{item.title}</h2>

                        {
                            item.qa.map((it, ind) => {

                                const current = `${index}-${ind}`;
                                const isOpen = openIndex === current;

                                return (
                                    <div
                                        className={`QuestEle ${isOpen ? "open" : ""}`}
                                        key={ind}
                                        onClick={() => handleToggle(index, ind)}
                                    >

                                        <div className={"QuestTop"}>
                                            <h3 className={"qq"}>
                                                {it.q}
                                            </h3>

                                            <h3 className={"plus"}>
                                                {isOpen ? "−" : "+"}
                                            </h3>
                                        </div>

                                        <div className={"AnswerWrap"}>
                                            <span className={"Gen small light"}>
                                                {it.a}
                                            </span>
                                        </div>

                                    </div>
                                );
                            })
                        }

                    </div>
                ))
            }
            </div>
        </>
    );
};

export default Faqs;