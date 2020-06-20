import { useState, useEffect } from "react";

export const ScrollPosition = () => {

    // Store the state
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);

    // On Scroll
    const onScroll = () => {
        setScrollPos(window.pageYOffset);
    };

    // Add and remove the window listener
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    });
    console.log(scrollPos);

    return scrollPos;
};
