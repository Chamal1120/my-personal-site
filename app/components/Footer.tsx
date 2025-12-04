import CatppuccinWebRing from "./CatppuccinWebRing";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <motion.div
        className="flex flex-1 px-5 text-sm sm:flex-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.6,
            duration: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          },
        }}
      >
        <CatppuccinWebRing />
      </motion.div>
    </div>
  );
}
