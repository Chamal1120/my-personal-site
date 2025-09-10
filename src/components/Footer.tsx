import Image from "next/image";

export default function Footer() {
  return (
    <div className="mx-auto flex flex-row py-12 flex-wrap">
      <div className="flex flex-row items-center justify-center px-5">
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
              width="20"
              height="20"
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
      <div><p>|</p></div>
      <div>
        <p className="px-5">This site was coded by a Human.</p>
      </div>
    </div>
  );
}
