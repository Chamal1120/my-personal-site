// import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-grow -translate-y-20 flex-col items-center justify-center">
      <div className="flex flex-col gap-5 md:flex-row">
        <h3 className="text-5xl font-black"> Hello, </h3>
        <h3 className="text-5xl font-black"> it&apos;s Chamal. </h3>
      </div>
      <br />
      <h2 className="text-lg"> Welcome to my space on the internet! </h2>
      <p className="pt-12 text-[0.6rem] italic underline">
        NOTE: This site is under heavy construction
      </p>
    </section>
  );
}
