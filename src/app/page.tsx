"use client";
import { useState } from "react";
// import IntroVideo from "~/components/IntroVideo"; // One day I'll add this
import MyStory from "~/components/MyStory";

// Homepage component
export default function HomePage() {
  const [showStory, setShowStory] = useState(false);

  return (
    <section className="flex h-full flex-row flex-wrap items-center justify-center px-5">
      <div>
        <div className="max-w-100"></div>
        <div className="text-justify sm:mx-10">
          <p>
            {`Hi, I'm `}
            <span className="font-bold">Chamal Randika</span>
            {`, a
            hobbyist software engineer, writer, pc builds enthusiast, gamer and
            a keyboard nerd. I goes by the name Chamal1120 online.`}
          </p>
          <br />
          <p>
            {`I'm interested in systems engineering, web dev, game dev, unix and ai.`}
          </p>
          <br />
          <button
            className={
              showStory
                ? "hidden"
                : "bg-ctp-lavender-dark/20 p-2 text-left text-sm hover:underline"
            }
            onClick={() => setShowStory(!showStory)}
          >
            {`Read my full story (it's long, so don't if you don't have time.)`}
          </button>
          <div className={showStory ? "" : "hidden"}>
            <MyStory />
          </div>
          <button
            className={
              showStory
                ? "bg-ctp-lavender-dark/20 p-2 text-left text-sm hover:underline"
                : "hidden"
            }
            onClick={() => setShowStory(!showStory)}
          >
            {`Close Story`}
          </button>
        </div>
      </div>
    </section>
  );
}
