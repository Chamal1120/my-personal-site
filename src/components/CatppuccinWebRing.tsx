import Image from "next/image";

export default function CatppuccinWebRing() {
  return (
    <div className="flex flex-row text-ctp-lavender-dark/80 hover:text-ctp-lavender-dark">
      <a className="pr-2" href="https://ctp-webr.ing/Chamal1120/previous">
        &larr;
      </a>
      <p className="cursor-default">Catppuccin</p>
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
      <p className="cursor-default">Webring</p>
      <a className="pl-2" href="https://ctp-webr.ing/Chamal1120/next">
        &rarr;
      </a>
    </div>
  );
}
