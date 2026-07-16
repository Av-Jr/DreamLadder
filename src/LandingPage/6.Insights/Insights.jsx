import "./Insights.scss";
import {img} from "../../utils/image.js"
import React, {useState, useEffect} from "react"
import { mainPageClient, homepageClient } from "../../../dreamladder-capital-cms/lib/sanityClient.js";
import { formatDate } from '../../utils/adminUtils';
import { useNavigate } from 'react-router-dom';

const Insights = () => {
    const [ytVideos, setYtVideos] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();
    const handleBlogClick = (post) => {
        // Navigate to /blogs and pass the clicked post as state
        navigate('/blogs', { state: { selectedPost: post } });
    };

// In Insights.jsx
    useEffect(() => {
        const fetchData = async () => {
            // Fetch Blogs
// In Insights.jsx
            const blogQuery = `*[_type == "post"] | order(_createdAt desc) {
    _id, title, _createdAt, coverImageUrl, author, body // Added 'body' here
}`;

            // Fetch Media marked for homepage
            const mediaQuery = `*[_type == "media" && showOnHomepage == true] | order(_createdAt desc)`;

            const [blogData, mediaData] = await Promise.all([
                mainPageClient.fetch(blogQuery),
                homepageClient.fetch(mediaQuery)
            ]);

            setBlogs(blogData || []);
            setYtVideos(mediaData || []);
        };
        fetchData();
    }, []);

    return(
        <div id={"InsightsMC"}>
            <h1 className={"Gen dark small"}>Latest Insights</h1>
            <span className={"Gen light small"}>Market perspective and Financial wisdom to keep you ahead.</span>

            <div className={"iframeElesCon"}>
                <h3 className={"Gen light small"}>Featured Videos</h3>
                <div className={"itsChild"}>
                    {
                        ytVideos.map((item, index) => (
                            <iframe
                                src={item.url} // Use the URL from Sanity
                                className="ifEle"
                                key={item._id || index}
                                title={item.title || "YouTube video player"}
                                frameBorder="0"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                            </iframe>
                        ))
                    }
                </div>
            </div>
            <div className={"blogsEle"}>

                <h3 className={"Gen light"}>Latest Blogs</h3>
                <div className={"itsChild"}>
                    {blogs.map((post, index) => (
                        <div className={"blogs"} key={post._id || index} onClick={() => handleBlogClick(post)} style={{ cursor: 'pointer' }}>
                            {post.coverImageUrl && <img loading="lazy" src={post.coverImageUrl} alt={post.title} />}

                            <div className={"DateBlog"}>
                                <span className={"Gen light small"}>{formatDate(post._createdAt)}</span>
                                {/* If 'type' is missing, this will render nothing instead of "General" */}
                                <span className={"Gen light small"}>{post.author}</span>
                            </div>

                            {/* Added class 'title-truncate' for CSS handling */}
                            <span className={"Gen small dark title-truncate"}>{post.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Insights;