import "./Pow.scss"

const Pow = () => {
    const userInfo = [
      {
        "name": "Puja Rai",
        "position": "CXO & Author | Mumbai",
        "statement": "Associated with DreamLadder Capital since inception, I value their disciplined asset allocation, consistent reviews, and transparent communication that bring clarity and confidence to my investments.",
        "image": "POWPuja"
      },
      {
        "name": "Ravi Shekhar",
        "position": "Radiologist & HOD | NCR",
        "statement": "What I appreciate most is their focus on long-term wealth creation rather than short-term noise. The team ensures my portfolio remains aligned with my financial goals and life stage.",
        "image": "POWRavi"
      }
    ]

    return(
        <div id={"PowMC"}>
            <h1>What Clients say about us</h1>
            <img className = "tobeHiddenImg"src="/POWwomen.png" alt=""/>
            <div className="CommentCon">
                {
                    userInfo.map((item, index) => (
                        <div key={index} className={"CommentEles"}>
                            <div className={"LeftCon"}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round"
                                     className="lucide lucide-quote w-12 h-12 text-purple-600 opacity-20 mb-4"
                                     aria-hidden="true">
                                    <path
                                        d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                    <path
                                        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                </svg>
                                <span>"{item.statement}"</span>
                                <h2>{item.name}</h2>
                                <h3>{item.position}</h3>
                            </div>
                        <div className="RightCon">
                            <img src={`/${item.image}.jpeg`}></img>
                        </div>


                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pow;