export async function fetchJson<T>(url: string): Promise<T> {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Request failed with status ${res.status} on URL: ${url}`);
  }

  const data = await res.json();
  return data as T;
}
