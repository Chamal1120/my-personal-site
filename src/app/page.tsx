//"use client";
//import { motion } from "motion/react";
import * as motion from "motion/react-client";
// import { useState } from "react";
// import IntroVideo from "~/components/IntroVideo"; // One day I'll add this
// import MyStory from "~/components/MyStory";

// Homepage component
export default function HomePage() {
  return (
    <section className="flex h-full flex-row flex-wrap items-center justify-center px-5 text-[1.1rem]">
      <div>
        {/* <div className="max-w-100"></div> */}
        <motion.div
          className="text-justify font-semibold sm:mx-10"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.2,
              duration: 1.5,
              ease: [0, 0.71, 0.2, 1.01],
            },
          }}
        >
          <p className="cursor-default duration-1000 ease-in-out hover:text-ctp-crust-light">
            {`Hello, My name is `}
            <span className="font-bold">{`Chamal`}</span>
            <span>
              . I&apos;m a recreational programmer, open source advocate,
              writer, pc builds enthusiast, gamer and a keyboard nerd.{" "}
              <span className="underline">Chamal1120</span> is the alias I use
              for online presence (dev work).
            </span>
          </p>
          <br />
          <p className="cursor-default duration-1000 ease-in-out hover:text-ctp-crust-light">{`I'm interested in systems programming, web dev and ai.`}</p>
          <br />
        </motion.div>
      </div>
    </section>
  );
}
