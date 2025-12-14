import { useEffect, useState } from "react";

export default function UpScroll({ showAfter = 50}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const OnScroll = () => setVisible(window.scrollY > showAfter);
        window.addEventListener("scroll", OnScroll, { passive: true });
        OnScroll();
        return () => window.removeEventListener("scroll", OnScroll);
    }, [showAfter]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button type="button" 
        className = {'upscroll-button' + (visible ? ' upscroll-button--visible' : '')}
        onClick = {scrollToTop}
        aria-label = "Scroll to top"
        title = "Scroll to top"
       >↑</button> 
    )
}
