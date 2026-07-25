import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) return;

        setTimeout(() => {
            const element = document.getElementById(hash.substring(1));

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 100);
    }, [pathname, hash]);

    return null;
}