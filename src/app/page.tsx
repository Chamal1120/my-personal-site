"use client";
// import { useState } from "react";
// import IntroVideo from "~/components/IntroVideo"; // One day I'll add this
// import MyStory from "~/components/MyStory";

// Homepage component
export default function HomePage() {
  return (
    <section className="flex h-full flex-row flex-wrap items-center justify-center px-5">
      <div>
        <div className="max-w-100"></div>
        <div className="text-justify sm:mx-10">
          <p>
            {`Hello, My name is `}
            <span className="font-bold hover:text-ctp-crust-light cursor-default">{`Chamal. `}</span>
            <span>
              I am a hobbyist software engineer, writer, pc builds enthusiast, gamer
              and a keyboard nerd. {" "}
              <span className="underline hover:text-ctp-crust-light cursor-default">Chamal1120</span> is the alias I use for online presence (dev work).
            </span>
          </p>
          <br />
          <p>{`I'm interested in systems programming, web dev and ai.`}</p>
          <br />
        </div>
      </div>
    </section>
  );
}
