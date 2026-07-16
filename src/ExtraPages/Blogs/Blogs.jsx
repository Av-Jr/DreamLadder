import React, { useEffect, useState } from 'react';
import { homepageClient } from "../../../dreamladder-capital-cms/lib/sanityClient.js";
import { formatDate } from '../../utils/adminUtils';
import "./Blogs.scss";
import { useLocation } from 'react-router-dom';

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
    _id, title, author, _createdAt, slug, body, coverImageUrl
}`;

export default function Blogs() {
    const location = useLocation();
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState("loading");
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await homepageClient.fetch(POSTS_QUERY);
                setPosts(data || []);
                setStatus("ready");

                // Logic to check if we arrived here from Insights
                if (location.state?.selectedPost) {
                    setSelectedPost(location.state.selectedPost);
                }
            } catch (err) {
                console.error("Fetch error:", err);
                setStatus("error");
            }
        };
        fetchPosts();
    }, [location.state]); // Dependency on location.state

    return (
        <main className="blogsPageLayout">
            <aside className="blogsIndex">
                <span className="Syn small">Index</span>
                {status === "ready" && posts.map((post, index) => (
                    <div key={post._id} className="indexItem" onClick={() => setSelectedPost(post)}>
                        <span className="Gen small number">{String(index + 1).padStart(2, '0')}</span>
                        <span className="Gen small title">{post.title}</span>
                    </div>
                ))}
            </aside>

            <section className="blogsDetail">
                {selectedPost ? (
                    <article className="blogDetailView">
                        <span className="btn-back Gen small" onClick={() => setSelectedPost(null)}>← Back</span>
                        {selectedPost.coverImageUrl && <img src={selectedPost.coverImageUrl} className="blogHeroImage" alt={selectedPost.title} />}
                        <span className="Syn medium block">{selectedPost.title}</span>
                        <span className="Gen small light block">By {selectedPost.author} | {formatDate(selectedPost.publishedAt)}</span>
                        <div className="blogBody Gen medium" dangerouslySetInnerHTML={{ __html: selectedPost.body }} />
                    </article>
                ) : (
// Inside Blogs.jsx - Replace the current blogs.map block:
                    <div className="blogsGrid">
                        {status === "ready" && posts.map((post) => (
                            <div key={post._id} className="blogCard" onClick={() => setSelectedPost(post)}>
                                {post.coverImageUrl && <img src={post.coverImageUrl} className="cardImage" alt={post.title} />}

                                {/* Using Insights.jsx DateBlog structure */}
                                <div className="DateBlog">
                                    <span className="Gen small light">{formatDate(post._createdAt)}</span>
                                    <span className="Gen small light">{post.author}</span>
                                </div>

                                <span className="Syn small block cardTitle title-truncate">{post.title}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}