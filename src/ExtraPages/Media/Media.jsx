import React, { useState, useEffect } from 'react';
import "./Media.scss";
import { homepageClient  } from "../../../dreamladder-capital-cms/lib/sanityClient.js"; // Ensure path is correct
import NavBar from "../../LandingPage/1.NavBar/NavBar.jsx";

export default function Media() {
    const [mediaList, setMediaList] = useState([]);

    useEffect(() => {
        const fetchMedia = async () => {
            // Fetch all media
            const query = `*[_type == "media"] | order(_createdAt desc)`;
            const data = await homepageClient.fetch(query);
            setMediaList(data || []);
        };
        fetchMedia();
    }, []);

    return (
        <div id={"MediaMC"}>
            <div className="titleHeadZ">
                <NavBar />
                <span className="titleZ">Media</span>
            </div>

            <div id={"ExtrasME"}>
            <div className="media-grid">
                {mediaList.length > 0 ? (
                    mediaList.map((item) => (
                        <div className="media-item" key={item._id}>
                            <div className="preview-container">
                                <iframe
                                    src={item.url}
                                    title={item.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="media-title">{item.title}</h3>
                        </div>
                    ))
                ) : (
                    <p>No media available yet.</p>
                )}
            </div>
        </div>
        </div>
    )
}