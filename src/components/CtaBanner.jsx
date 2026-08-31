export default function CtaBanner() {
  return (
    <section
      className="relative overflow-hidden bg-purple-950 bg-boost-mobile bg-cover bg-center py-16 text-center md:bg-boost-desktop"
      aria-labelledby="cta-heading"
    >
      <div className="relative mx-auto max-w-content px-6 md:px-8">
        <h2 id="cta-heading" className="text-3xl font-bold text-white">
          Boost your links today
        </h2>
        <a
          href="#shorten"
          className="mt-8 inline-block rounded-full bg-blue-400 px-10 py-4 font-bold text-white transition hover:opacity-80"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
