import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const targetId = decodeURIComponent(hash.replace(/^#/, ""));
            let attempts = 0;
            let rafId = 0;

            const scrollToHash = () => {
                const el = document.getElementById(targetId);

                if (el) {
                    el.scrollIntoView({
                        block: "start",
                    });
                    return;
                }

                if (attempts < 30) {
                    attempts += 1;
                    rafId = window.requestAnimationFrame(scrollToHash);
                }
            };

            rafId = window.requestAnimationFrame(scrollToHash);

            return () => window.cancelAnimationFrame(rafId);
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
