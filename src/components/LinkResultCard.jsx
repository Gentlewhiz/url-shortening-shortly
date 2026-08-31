import { useState } from "react";

export default function LinkResultCard({ link }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(link.shortUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.warn("Clipboard copy failed:", error);
    }
  }

  return (
    <li className="flex flex-col gap-4 rounded-lg bg-white p-4 text-left md:flex-row md:items-center md:gap-0 md:py-3">
      <p className="flex-1 truncate text-gray-900 md:pr-4">{link.originalUrl}</p>

      <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 md:flex-row md:items-center md:gap-4 md:border-t-0 md:pt-0">
        <a
          href={link.shortUrl}
          target="_blank"
          rel="noreferrer"
          className="truncate font-medium text-blue-400"
        >
          {link.shortUrl}
        </a>
        <button
          type="button"
          onClick={handleCopy}
          className={`shrink-0 rounded-full px-6 py-2 font-bold text-white transition md:w-24 ${
            isCopied ? "bg-purple-950" : "bg-blue-400 hover:opacity-80"
          }`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </li>
  );
}
