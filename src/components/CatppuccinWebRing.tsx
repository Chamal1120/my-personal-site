import Image from "next/image";

export default function CatppuccinWebRing() {
  return (
    <>
      <a
        className="pr-2 hover:scale-105 active:scale-95"
        href="https://ctp-webr.ing/Chamal1120/previous"
      >
        &larr;
      </a>
      <p className="text-ctp-crust-light/50">Catppuccin</p>
      <a href="https://ctp-webr.ing/">
        <div className="px-2">
          <Image
            src="/catppuccin_icon.png"
            width="20"
            height="20"
            alt="catppuccin-icon"
          ></Image>
        </div>
      </a>
      <p className="text-ctp-crust-light/50">Webring</p>
      <a
        className="pl-2 hover:scale-105 active:scale-95"
        href="https://ctp-webr.ing/Chamal1120/next"
      >
        &rarr;
      </a>
    </>
  );
}
