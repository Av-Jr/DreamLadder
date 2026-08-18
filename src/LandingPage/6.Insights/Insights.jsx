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
    const [activeVideo, setActiveVideo] = useState(null);
    const getYoutubeId = (url) => {
        const match = url.match(/(?:embed\/|watch\?v=|youtu\.be\/)([^?&/]+)/);
        return match ? match[1] : "";
    };
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
            <h2 className={"Gen light small"}>Market perspective and Financial wisdom to keep you ahead.</h2>

            <div className={"iframeElesCon"}>
                <h3 className={"Gen light small"}>Featured Videos</h3>
                <div className={"itsChild"}>
                    {
                        ytVideos.map((item, index) => {
                            const videoId = getYoutubeId(item.url);

                            if (activeVideo === item._id) {
                                return (
                                    <iframe
                                        key={item._id || index}
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                        className="ifEle"
                                        title={item.title || "YouTube video player"}
                                        frameBorder="0"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    />
                                );
                            }

                            return (
                                <div
                                    key={item._id || index}
                                    className="ifEle ytThumbnail"
                                    onClick={() => setActiveVideo(item._id)}
                                    style={{
                                        backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`
                                    }}
                                />
                            );
                        })
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