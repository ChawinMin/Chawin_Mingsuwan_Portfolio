import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        //If there's no has, always go to top on route change
        if(!hash){
            window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            return;
        }
        
        //If there is a hash, scroll to the element with that id
        //wati for DOM to paint
        setTimeout(() => {
            const el = document.querySelector(hash);
            if(el)  el.scrollIntoView({ behavior: "smooth", block: "start"});
        }, 0);
    }, [pathname, hash]);
    
    return null;
}