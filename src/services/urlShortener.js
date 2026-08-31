/**
 * Thin wrapper around the Clean URI API (https://cleanuri.com/docs).
 * Kept isolated from components so the shortening provider can be swapped
 * out later without touching any UI code.
 */

const API_ENDPOINT = "https://cleanuri.com/api/v1/shorten";

/**
 * Shortens a single URL.
 *
 * @param {string} longUrl - The URL to shorten.
 * @returns {Promise<string>} The shortened URL.
 * @throws {Error} When the request fails or the API returns an error payload.
 */
export async function shortenUrl(longUrl) {
  let response;

  try {
    response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ url: longUrl }).toString(),
    });
  } catch {
    throw new Error("Couldn't reach the shortening service. Check your connection and try again.");
  }

  let data;
  try {
    data = await response.json();
  } catch {
    throw new Error("Received an unexpected response. Please try again.");
  }

  if (!response.ok || data.error) {
    throw new Error(data?.error || "That link couldn't be shortened. Please try again.");
  }

  return data.result_url;
}
