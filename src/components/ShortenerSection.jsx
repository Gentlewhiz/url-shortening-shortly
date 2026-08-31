import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { shortenUrl } from "../services/urlShortener";
import LinkResultCard from "./LinkResultCard";

export default function ShortenerSection() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [links, setLinks] = useLocalStorage("shortly:links", []);

  async function handleSubmit(event) {
    event.preventDefault();

    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError("Please add a link");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const shortUrl = await shortenUrl(trimmedUrl);
      const newLink = {
        id: crypto.randomUUID(),
        originalUrl: trimmedUrl,
        shortUrl,
      };
      setLinks((current) => [newLink, ...current]);
      setUrl("");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="shorten"
      className="mx-auto max-w-content px-6 md:px-8"
      aria-labelledby="shorten-heading"
    >
      <h2 id="shorten-heading" className="sr-only">
        Shorten a link
      </h2>

      <div className="relative overflow-hidden rounded-xl bg-purple-950 bg-shorten-mobile bg-cover bg-right-top px-6 py-8 md:bg-shorten-desktop md:px-12 md:py-12">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="relative flex flex-col gap-4 md:flex-row"
        >
          <div className="flex-1">
            <input
              type="text"
              inputMode="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="Shorten a link here..."
              aria-label="URL to shorten"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "shorten-error" : undefined}
              className={`w-full rounded-lg px-6 py-4 text-gray-900 outline-none placeholder:text-gray-500 ${
                error ? "border-2 border-red-400" : "border-2 border-transparent"
              }`}
            />
            {error && (
              <p id="shorten-error" role="alert" className="mt-2 italic text-red-400">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 rounded-lg bg-blue-400 px-10 py-4 font-bold text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
      </div>

      {links.length > 0 && (
        <ul className="mt-6 flex flex-col gap-4">
          {links.map((link) => (
            <LinkResultCard key={link.id} link={link} />
          ))}
        </ul>
      )}
    </section>
  );
}
