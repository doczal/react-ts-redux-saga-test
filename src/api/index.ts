import { CatImage } from "catTypes";
import { PostVoteReq, PostVoteRes, VoteData } from "voteTypes";

const apiUrl = `${process.env.API_URL}`;
const apiKey = `${process.env.API_KEY}`;
const subId = `${process.env.SUB_ID}`;
type httpMethod = "GET" | "POST" | "DEL";

export interface FetchApiRes<T> {
  data: T;
  error: boolean;
}

// Endpoints
export function apiGetImages() {
  return fetchApi<CatImage[]>("images", "GET", undefined, {
    limit: 4,
    sub_id: subId,
  });
}

export function apiGetVotes() {
  return fetchApi<VoteData[]>("votes", "GET", undefined, { sub_id: subId });
}

export function apiPostVote(data: PostVoteReq) {
  const body = {
    ...data,
    sub_id: subId,
  };
  return fetchApi<PostVoteRes>("votes", "POST", body);
}

// Helpers
export function createEndpoint(
  url: string,
  path: string,
  params: Record<string, any> = {}
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

export async function fetchApi<T>(
  path: string,
  method: httpMethod = "GET",
  body?: Record<string, any>,
  params?: Record<string, any>
): Promise<FetchApiRes<T>> {
  const url = createEndpoint(apiUrl, path, params);
  console.log(url);
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });
    console.log(response);
    const data = await response.json();
    return {
      data,
      error: false,
    };
  } catch (e) {
    console.log(e);
    return {
      data: null,
      error: true,
    };
  }
}
