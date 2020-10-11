import { CatImage } from "catTypes";
import { PostVoteReq, PostVoteRes, VoteData } from "voteTypes";

const apiUrl = `${process.env.API_URL}`;
const apiKey = `${process.env.API_KEY}`;
const subId = `${process.env.SUB_ID}`;
type httpMethod = "GET" | "POST" | "DELETE";

export interface FetchApiRes<T> {
  data: T;
  error: boolean;
}

// Endpoints
export function apiGetImages() {
  return fetchApi<CatImage[]>("images", "GET", undefined, {
    limit: 8,
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
  return fetchApi<PostVoteRes>("votes", "POST", JSON.stringify(body));
}

export function apiPostImage(image: File) {
  const formData = new FormData();
  formData.append("file", image);
  formData.append("sub_id", subId);
  return fetchApi("images/upload", "POST", formData);
}

export function apiDeleteImage(imageId: string) {
  return fetchApi(`images/${imageId}`, "DELETE");
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

function isFormData(val: BodyInit) {
  return (val as FormData).append !== undefined;
}

export async function fetchApi<T>(
  path: string,
  method: httpMethod = "GET",
  body?: BodyInit,
  params?: Record<string, any>
): Promise<FetchApiRes<T>> {
  const url = createEndpoint(apiUrl, path, params);
  const headersObj: HeadersInit = {
    "x-api-key": apiKey,
  };
  if (body && !isFormData(body)) {
    headersObj["Content-Type"] = "application/json";
  }
  try {
    const response = await fetch(url, {
      method: method,
      headers: headersObj,
      body,
    });
    console.log("res", response);
    if (!response.status.toString().startsWith("2")) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    let data;
    try {
      data = await response.json();
    } catch {
      data = null;
    }
    console.log("data", data);
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
