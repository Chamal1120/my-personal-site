"use client";
import { useState, useRef } from "react";

// IntroVideo Component: Renders a video ref to intro video
export default function IntroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      void videoRef.current.pause();
    } else {
      void videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <video
        ref={videoRef}
        preload="none"
        //        controls
        poster="/images/intro-thumbnail.webp"
        width="100%"
        style={{ borderRadius: "0px", background: "#000" }}
        onClick={handleClick}
      >
        <source src="/videos/intro.mp4" type="video/mp4" />
        {"Damn bro!, Your browser is so old that it doesn't even know HTML5."}
      </video>
    </div>
  );
}
