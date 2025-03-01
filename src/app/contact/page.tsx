export default function ContactPage() {
  return (
    <section>
      <h2 className="pb-6 text-3xl">Ways you can contact me.</h2>
      <div className="flex flex-row justify-center gap-4 pb-36">
        <a
          className="text-lg hover:underline"
          href="https://github.com/chamal1120"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="text-lg hover:underline"
          href="mailto:chamal.randika.mcr@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          E-mail
        </a>
      </div>
    </section>
  );
}
