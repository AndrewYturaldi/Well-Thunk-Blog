import { useState, useEffect } from "react";

function TopScroller() {
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };

      useEffect(() => {
        const onPageScroll = () => {
          if (window.pageYOffset > 600) {
            setGoUp(true);
          } else {
            setGoUp(false);
          }
        };
        window.addEventListener("scroll", onPageScroll);
    
        return () => {
          window.removeEventListener("scroll", onPageScroll);
        };
      }, []);

    return (
        <>
            {/* page up */}
            <div onClick={scrollToTop} className={`scroll-up ${goUp ? "show-scroll" : "hide-scroll"}`}>
            ^
            </div>
        </>
    )
}

export default TopScroller;