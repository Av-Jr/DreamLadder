import "./Insights.scss";

const Insights = () => {
    const ytUrls = ["https://www.youtube.com/embed/JGNfq2gg-vo?si=DlTmoRpLe17VLdym", "https://www.youtube.com/embed/nuj8ZoFbGEM?si=U9V1bGo1H6BimFYx", "https://www.youtube.com/embed/xEqbYSU3F_I?si=6vO8e0Y_IuFKXzJS", "https://www.youtube.com/embed/22glfK-1098?si=CVdnCESr-mZn5Znm"];
    const blogData = [
  {
    "date": "July 5, 2022",
    "title": "Are you confused about owning Large Cap or Mid/Small Cap...",
    "type": "Mutual Funds",
    "image": "blogImg1"
  },
  {
    "date": "April 27, 2022",
    "title": "Mutual Funds: Foundations of smart investing",
    "type": "Mutual Funds",
    "image": "blogImg2"
  },
  {
    "date": "March 4, 2022",
    "title": "Power of Compounding: 8th wonder of the world",
    "type": "Mutual Funds",
    "image": "blogImg3"
  },
  {
    "date": "March 4, 2022",
    "title": "Will & Estate Planning: The Foundation of Legacy",
    "type": "Mutual Funds",
    "image": "blogImg4"
  }
];

    return(
        <div id={"InsightsMC"}>
            <h1>Latest Insights</h1>
            <h3>Market perspective and Financial wisdom to keep you ahead.</h3>

            <div className={"iframeElesCon"}>
                <h3>Featured Videos</h3>
                {
                    ytUrls.map((item, index) => (
                        <iframe
                            src={item}
                            className = "ifEle"
                            key={index}
                            title="YouTube video player"
                            frameBorder="0"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                        )
                    )
                }

                <h3>Latest Blogs</h3>
                {
                    blogData.map((item, index) => (
                        <div className={"ifEle blogs"}>
                            <img src={`/${item.image}.png`} alt=""/>
                             <span>{item.date}</span>
                             <span>{item.type}</span>
                             <span>{item.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Insights;