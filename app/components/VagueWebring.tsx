import Image from "next/image";

export default function VagueWebring() {
  return (
    <div className="group text-magenta/80 hover:text-magenta ml-6.5 flex flex-row sm:pl-2">
      <a
        className="h hover:text-yellow translate-y-0.5 pr-2 transition-all duration-300 ease-in-out hover:-translate-x-0.5"
        href="https://github.com.vague-theme"
      >
        &lt;
      </a>
      <p className="cursor-default transition-all duration-300 ease-in-out">
        Vague
      </p>
      <a href="https://github.com/vague-theme">
        <div className="origin-center px-2 transition-all duration-300 ease-in-out">
          <Image
            src="/vague-icon.png"
            width="20"
            height="20"
            alt="vague-icon"
          ></Image>
        </div>
      </a>
      <p className="cursor-default transition-all duration-300 ease-in-out">
        webring
      </p>
      <a
        className="hover:text-yellow translate-y-0.5 pl-2 transition-all duration-300 ease-in-out hover:translate-x-0.5"
        href="https://github.com.vague-theme"
      >
        &gt;
      </a>
    </div>
  );
}
