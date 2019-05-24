export const API_URL_ROOT = "http://13.233.212.134";

export async function get() {
  return await fetch(
    "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526",
    {}
  );
}
