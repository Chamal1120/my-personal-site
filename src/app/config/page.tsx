import Link from "next/link";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function ConfigPage() {
  return (
    <>
      <motion.h1
        className="cursor-default pl-4 pt-4 text-left text-3xl font-bold"
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
        }}
      >
        Info
      </motion.h1>
      <div className="flex cursor-default flex-row gap-5 p-4 text-left">
        <div>
          <motion.ul
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
            }}
          >
            <li>
              <span className="font-bold">OSes - </span>
              GNU/Linux (Arch btw)/ MacOS/ Windows 11
            </li>
            <li>
              <span className="font-bold">Terminal Emulator - </span>
              Alacritty
            </li>
            <li>
              <span className="font-bold">Nerd Font - </span>
              Meslo (OSX)/ CaskaydiaCove (Linux/Windows 11)
            </li>
            <li>
              <span className="font-bold">WM/ Compositor - </span>
              Yabai (OSX)/ Hyprland (Linux)
            </li>
            <li>
              <span className="font-bold">Text Editor/ IDE - </span>
              Vim/ Neovim
            </li>
            <li>
              <span className="font-bold">Keyboard - </span>
              MageGee MK-Star61 60% Mechanical (Blue switches)
            </li>
          </motion.ul>
          <motion.div
            className="flex gap-2"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: [0, 0.71, 0.2, 1.01] },
            }}
          >
            <h2 className="font-bold">Dotfiles Links - </h2>
            <Link
              className="hover:underline"
              href="https://github.com/Chamal1120/dotfiles"
              target="_blank"
            >
              Linux,
            </Link>
            <Link
              className="hover:underline"
              href="https://github.com/Chamal1120/dotfiles-mac"
              target="_blank"
            >
              MacOS
            </Link>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <Image
              className="p-2 px-0 pt-10"
              src={
                "https://raw.githubusercontent.com/Chamal1120/dotfiles/refs/heads/main/.github/previews/2025-10-02-233014_hyprshot.webp"
              }
              width={1280}
              height={720}
              alt="chamal1120-linux-dots"
            ></Image>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
                duration: 1,
                ease: [0, 0.71, 0.2, 1.01],
              },
            }}
          >
            <Image
              className="p-2 px-0"
              src={
                "https://raw.githubusercontent.com/Chamal1120/dotfiles/refs/heads/main/.github/previews/2025-10-02-233201_hyprshot.webp"
              }
              width={1280}
              height={720}
              alt="chamal1120-linux-dots"
            ></Image>
          </motion.div>
        </div>
      </div>
    </>
  );
}
