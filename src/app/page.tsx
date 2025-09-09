"use client";
import Image from "next/image";
import { motion } from "motion/react";

const introp1 =
  "Welcome to my site. I like programming, watching movies and tv series, playing video games and writing random things about tech and entertainment.";
const introp2 =
  "The reason I love programming is becuase it allows me to  understand the abstractions behind software and operating systems and to create little things myself which I don't want to pay for or get busted sailing through the high seas! (iykyk).";
const introp3 =
  "I use GNU/Linux as my daily driver and mostly consume terminal emulator based workflows for my developer needs. if you're interested in my workflows, take a look at my ";
const introp4 =
  "Oh btw, I recently started a YouTube channel to yap about terminals and whatnot. Check it out ";

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-between px-10">
      <motion.div
        className="flex flex-1 flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        <br />
        <motion.p className="max-w-3xl cursor-default text-justify text-lg">
          <span>
            Hi, I&apos;m <span className="font-bold">Chamal, </span>
          </span>
          {introp1}
        </motion.p>
        <br />
        <motion.p className="max-w-3xl cursor-default text-justify text-lg">
          {introp2}
        </motion.p>
        <br />
        <motion.p className="max-w-3xl cursor-default text-justify text-lg">
          {introp3}
          <a
            className="underline"
            href="https://github.com/Chamal1120/dotfiles/"
            target="_blank"
          >
            dotfiles
          </a>
          .
        </motion.p>
        <br />
        <motion.p className="max-w-3xl cursor-default text-justify text-lg">
          {introp4}
          <a 
            className="underline"
            href="https://www.youtube.com/@chamalrandika_99"
            target="_blank"
          >here</a>
          .
        </motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
        className="flex flex-col py-12"
      >
        <div className="flex flex-row items-center justify-center pt-6">
          <a
            className="pr-5 hover:scale-105 active:scale-95"
            href="https://ctp-webr.ing/Chamal1120/previous"
          >
            &larr;
          </a>
          <p>Catppuccin</p>
          <a href="https://ctp-webr.ing/">
            <div className="flex flex-col items-center justify-center px-2">
              <Image
                src="/catppuccin_icon.png"
                width="30"
                height="30"
                alt="catppuccin-icon"
              ></Image>
            </div>
          </a>
          <p>Webring</p>
          <a
            className="pl-5 hover:scale-105 active:scale-95"
            href="https://ctp-webr.ing/Chamal1120/next"
          >
            &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}
