"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    // Attaches a scroll listener that updates the scrollPresent
    // to main element and call it immediately
    const handleScroll = () => {
      const main = document.querySelector("main");
      if (!main) return;

      const scrollTop = main.scrollTop;
      const scrollHeight = main.scrollHeight - main.clientHeight;
      const percent = (scrollTop / scrollHeight) * 100;
      setScrollPercent(percent);
    };

    const main = document.querySelector("main");
    main?.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => main?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-40 bg-transparent flex flex-col justify-end mb-2">
      <div
        className="bg-ctp-lavender-dark w-full transition-all"
        style={{
          height: `${scrollPercent}%`,
          maxHeight: "100%",
        }}
      />
    </div>
  );
}
