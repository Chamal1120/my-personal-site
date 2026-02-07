import Image from "next/image";

export default function CatppuccinWebRing() {
  return (
    <div className="group text-magenta/80 hover:text-magenta flex flex-row sm:pl-2">
      <a
        className="h hover:text-yellow translate-y-0.5 pr-2 transition-all duration-300 ease-in-out hover:-translate-x-0.5"
        href="https://ctp-webr.ing/Chamal1120/previous"
      >
        &lt;
      </a>
      <p className="cursor-default transition-all duration-300 ease-in-out group-hover:-translate-x-0.5">
        ctp
      </p>
      <a href="https://ctp-webr.ing/">
        <div className="origin-center px-2 transition-all duration-300 ease-in-out group-hover:-rotate-[0.5rad]">
          <Image
            src="/catppuccin_icon.png"
            width="20"
            height="20"
            alt="catppuccin-icon"
          ></Image>
        </div>
      </a>
      <p className="cursor-default transition-all duration-300 ease-in-out group-hover:translate-x-0.5">
        webring
      </p>
      <a
        className="hover:text-yellow translate-y-0.5 pl-2 transition-all duration-300 ease-in-out hover:translate-x-0.5"
        href="https://ctp-webr.ing/Chamal1120/next"
      >
        &gt;
      </a>
    </div>
  );
}
