import * as motion from "motion/react-client";
import { configData } from "./configData";

export default function ConfigPage() {
  return (
    <>
      <motion.h1
        className="text-fg mb-2 text-3xl font-semibold tracking-tight md:text-4xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Things I use
      </motion.h1>
      <motion.p
        className="text-fg/70 mb-8 text-lg font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.08, duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        My current setup.
      </motion.p>
      <motion.ul
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.12, duration: 0.6, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        {configData.map((item, index) => (
          <li key={index} className="flex gap-3 text-sm">
            <span className="text-fg/50 shrink-0 font-mono w-40">
              {item.label}
            </span>
            <span className="text-fg">
              {item.links.map((link, linkIndex) => (
                <span key={linkIndex}>
                  {linkIndex > 0 && <span className="text-fg/40">, </span>}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow hover:underline transition-colors"
                  >
                    {link.text}
                  </a>
                </span>
              ))}
            </span>
          </li>
        ))}
      </motion.ul>
    </>
  );
}
