import React, { useEffect, useState } from 'react';
import { PortableText } from '@portabletext/react';
import { homepageClient } from "../../../studio-hello-world/lib/sanityClient.js";
import "./Blogs.scss";

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
    _id, title, author, publishedAt, slug, body, coverImageUrl
}`;

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await homepageClient.fetch(POSTS_QUERY);
                setPosts(data || []);
                setStatus("ready");
            } catch (err) {
                console.error("Fetch error:", err);
                setStatus("error");
            }
        };
        fetchPosts();
    }, []);

    const scrollToPost = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="blogsPageLayout">
            <aside className="blogsIndex">
                <h2 className="Syn small">Index</h2>
                {status === "ready" && posts.map((post) => (
                    <div key={post._id} className="indexItem" onClick={() => scrollToPost(post._id)}>
                        <span className="Gen small">{post.title}</span>
                    </div>
                ))}
            </aside>

            <section className="blogsDetail">
                {status === "ready" && posts.map((post) => (
// Inside your Blogs.jsx - rendering logic
                    <article key={post._id} id={post._id} className="blogCard">
                        {post.coverImageUrl && (
                            <img src={post.coverImageUrl} alt={post.title} className="blogHeroImage" />
                        )}
                        <h1 className="Syn small">{post.title}</h1>
                        <span className="blogAuthor Gen small light">By {post.author || 'Unknown'}</span>

                        <div className="blogBody Gen medium">
                            <PortableText
                                value={post.body}
                                components={{
                                    // You can add custom styles here if needed
                                    block: {
                                        normal: ({children}) => <p className="blog-paragraph">{children}</p>,
                                        h1: ({children}) => <h1 className="blog-h1">{children}</h1>,
                                    }
                                }}
                            />
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}