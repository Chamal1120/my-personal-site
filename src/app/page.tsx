"use client";
// import Link from "next/link";
import { motion } from "motion/react";

export default function HomePage() {
  return (
    <section className="flex flex-grow -translate-y-20 flex-col items-center justify-center">
      <motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
            filter: "blur(5px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.8,
            scale: { type: "tween", ease: "easeOut", duration: 0.3 },
            filter: { duration: 0.3 },
          }}
          className="flex flex-col gap-5 md:flex-row"
        >
          <h3 className="text-5xl font-black"> Hello, </h3>
          <h3 className="text-5xl font-black"> it&apos;s Chamal. </h3>
        </motion.div>
        <br />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            y: {
              type: "spring",
              stiffness: 100,
              damping: 10,
              mass: 0.8,
              bounce: 0.3,
              delay: 0.8,
            },
            delay: 0.8,
          }}
          className="cursor-default text-lg"
        >
          {" "}
          Welcome to my space on the internet!{" "}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 3,
            scale: { type: "spring", visualDuration: 0.8, bounce: 0.4 },
          }}
          className="pt-12 text-[0.6rem] italic underline"
        >
          NOTE: This site is under heavy construction
        </motion.p>
      </motion.div>
    </section>
  );
}
