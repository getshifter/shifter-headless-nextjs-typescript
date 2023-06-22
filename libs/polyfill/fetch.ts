import unfetch from "isomorphic-unfetch";

export async function fetch<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await unfetch(input, init);
  return res.json();
}
