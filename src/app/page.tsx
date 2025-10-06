'use client'
import { useState } from "react";
// import IntroVideo from "~/components/IntroVideo";
import MyStory from "~/components/MyStory";

// Homepage component
export default function HomePage() {

  const [show, setShow] = useState(false);

  return (
    <section className="flex flex-row h-full flex-wrap items-center justify-center px-5">
      <div>
        <div className="max-w-100"> 
        </div>
        <div className="text-justify sm:mx-10">
          <p>
            Hi, I'm <span className="font-bold">Chamal Randika</span>, a hobbyist software engineer, writer, pc 
            builds enthusiast, gamer and a keyboard nerd. I also goes by the 
            aliases "Chamal1120", "Kenway213" and "Randy99".
          </p><br/>
          <p>
            I have a reputation of being a computer wiz for knowing absurd amount of
            tips and tricks on assembling computers, tinkering OSes, doing 
            automations and etc. I was introduced to programming from fixing
            bat files for tweaking Windows and pirating games. But nowadays
            I'm mostly a software engineer and interested in creating tools
            and workflows for developer efficiency.
          </p><br/>
          <button className={show? "hidden": "text-sm bg-ctp-lavender-dark/20 p-2 hover:underline text-left" } onClick={() => setShow(!show)}>Read my full story (it's long, so don't if you don't have time.)</button>
          <div className={show? "" : "hidden"}>
            <MyStory />
          </div>
        </div>
      </div>
    </section>
  );
}
