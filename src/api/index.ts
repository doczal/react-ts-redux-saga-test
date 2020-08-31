const apiUrl = `${process.env.API_URL}`;
const apiKey = `${process.env.API_KEY}`;
type httpMethod = "GET" | "POST" | "DEL";

// Endpoints
export function apiGetImages() {
  return fetchApi("images/search", "GET", undefined, { limit: 5 });
}

// Helpers
export function createEndpoint(
  url: string,
  path: string,
  params: Record<string, any>
) {
  let newUrl = `${url}/${path}`;
  let queryStr = "";
  if (Object.keys(params).length > 0) {
    newUrl += "?";
    for (const key in params) {
      if (queryStr !== "") {
        queryStr += "&";
      }
      queryStr += key + "=" + encodeURIComponent(params[key]);
    }
  }
  return newUrl + queryStr;
}

export function fetchApi(
  path: string,
  method: httpMethod = "GET",
  body?: Record<string, any>,
  params?: Record<string, any>
) {
  const url = createEndpoint(apiUrl, path, params);
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify(body),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Network error");
    }
  });
}
