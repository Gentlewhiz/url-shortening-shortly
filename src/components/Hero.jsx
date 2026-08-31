import illustration from "../assets/images/illustration-working.svg";

export default function Hero() {
  return (
    <section className="mx-auto max-w-content px-6 pb-20 pt-8 md:px-8 md:pb-16 md:pt-16">
      <div className="flex flex-col items-center gap-12 text-center md:flex-row md:gap-8 md:text-left">
        <div className="order-2 flex-1 md:order-1">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            More than just
            <br />
            shorter links
          </h1>
          <p className="mx-auto mt-6 max-w-sm text-gray-500 md:mx-0 md:max-w-md">
            Build your brand&rsquo;s recognition and get detailed insights on how your links are
            performing.
          </p>
          <a
            href="#shorten"
            className="mt-8 inline-block rounded-full bg-blue-400 px-10 py-4 font-bold text-white transition hover:opacity-80"
          >
            Get Started
          </a>
        </div>

        <div className="order-1 flex-1 md:order-2">
          <img
            src={illustration}
            alt="Illustration of a person working at a desk with a large monitor"
            className="w-full max-w-md md:ml-auto md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
