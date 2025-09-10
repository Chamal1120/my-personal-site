"use client";
//import Image from "next/image";
import { motion } from "motion/react";
import IntroVideo from "~/components/IntroVideo";

const introp1 =
  "welcome to my site! I goes by the alias \"Chamal1120\" in dev oriented socials. I love programming, Unix tooling, watching anime, playing video games and writing reviews.";
const introp2 =
  "I'm a huge fan of fast dev workflows and I use GNU/Linux as my daily driver to experiment and promote keyboard centric terminal emulator based workflows. if you're interested, take a look at my ";
const introp4 =
  "Oh btw, I recently started a YouTube channel to yap about terminals and whatnot. Check it out ";

export default function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center justify-between px-8">
      <IntroVideo />
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
        <motion.p className="max-w-5xl cursor-default text-justify text-lg">
          <span>
            Hey, I&apos;m <span className="font-bold">Chamal, </span>
          </span>
          {introp1}
        </motion.p>
        <br />
        <motion.p className="max-w-5xl cursor-default text-justify text-lg">
          {introp2}
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
        <motion.p className="max-w-5xl cursor-default text-justify text-lg">
          {introp4}
          <a 
            className="underline"
            href="https://www.youtube.com/@chamalrandika_99"
            target="_blank"
          >here</a>
          .
        </motion.p>
      </motion.div>
    </section>
  );
}
