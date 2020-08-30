const apiUrl = `${process.env.API_URL}`;
const apiKey = `${process.env.API_KEY}`;
type httpMethod = "GET" | "POST" | "DEL";

// Endpoints
export function getCategories() {
  return fetchApi("categories");
}

// Helpers
function createEndpoint(
  url: string,
  path: string,
  params: Record<string, any>
) {
  let newUrl = `${url}/${path}`;
  if (params.length > 0) {
    newUrl += "?";
    for (const key in params) {
      if (newUrl !== "") {
        newUrl += "&";
      }
      newUrl += key + "=" + encodeURIComponent(params[key]);
    }
  }
  return newUrl;
}

function fetchApi(
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
  });
}
