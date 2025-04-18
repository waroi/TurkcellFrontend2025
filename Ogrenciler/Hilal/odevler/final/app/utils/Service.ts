const fetchService = async <T = any, B = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body :B | null =null,
  options: RequestInit = {}
):Promise<T|undefined> => {

  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const requestOptions: RequestInit = {
    method,
    headers: {
      ...defaultHeaders,
      ...(options.headers || {}),
    },
    body: body ? JSON.stringify(body) : null,
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      console.error(`Request failed → ${url}:`, response.status, response.statusText);
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fetch error → ${url}:`, error);
    return;
  }
};
export default fetchService;
