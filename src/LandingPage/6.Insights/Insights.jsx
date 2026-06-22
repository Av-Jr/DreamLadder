import "./Insights.scss";
import {img} from "../../utils/image.js"

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
            <h2 className={"Gen dark bold"}>Latest Insights</h2>
            <span className={"Gen light small"}>Market perspective and Financial wisdom to keep you ahead.</span>

            <div className={"iframeElesCon"}>
                <h3 className={"Gen light small"}>Featured Videos</h3>
                <div className={"itsChild"}>
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
                </div>

            </div>
            <div className={"blogsEle"}>

                <h3 className={"Gen light"}>Latest Blogs</h3>
                <div className={"itsChild"}>
                {
                    blogData.map((item, index) => (
                        <div className={"blogs"} key={index}>
                            <img loading="lazy" src={img(item.image)} alt=""/>
                            <div className={"DateBlog"}>
                                <span className={"Gen light small"}>{item.date}</span>
                                <span className={"Gen light small"}>{item.type}</span>
                            </div>
                             <span className={"Gen small dark"}>{item.title}</span>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Insights;