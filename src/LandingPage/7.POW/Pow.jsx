import "./Pow.scss"

const Pow = () => {
  const userInfo = [
    {
      name: "Puja Rai",
      position: "CXO & Author | Mumbai",
      statement:
        "Associated with DreamLadder Capital since inception, I value their disciplined asset allocation, consistent reviews, and transparent communication that bring clarity and confidence to my investments.",
      image: "POWPuja",
    },
    {
      name: "Ravi Shekhar",
      position: "Radiologist & HOD | NCR",
      statement:
        "What I appreciate most is their focus on long-term wealth creation rather than short-term noise. The team ensures my portfolio remains aligned with my financial goals and life stage.",
      image: "POWRavi",
    },
  ]

  return (
    <div id="PowMC">
      <div className="containingCon">

        <h1>What Clients say about us</h1>

        <div className="contentRow">
          <img className="sideImg" src="/POWwomen.png" alt="" />

          <div className="slider">
            <div className="track">
              {userInfo.map((item, index) => (
                <div key={index} className="card">

                  <div className="text">
                    <span>"{item.statement}"</span>
                    <h2>{item.name}</h2>
                    <h3>{item.position}</h3>
                  </div>

                  <div className="image">
                    <img src={`/${item.image}.jpeg`} alt="" />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pow