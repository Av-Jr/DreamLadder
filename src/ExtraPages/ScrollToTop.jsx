import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // Extracts pathname property (the URL path) from the current location
    const { pathname } = useLocation();

    // Automatically runs every time the pathname changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // This component doesn't render any HTML
};

export default ScrollToTop;