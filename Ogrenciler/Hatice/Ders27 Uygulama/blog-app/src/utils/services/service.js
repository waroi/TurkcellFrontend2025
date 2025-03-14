const apiFetch = async (endpoint, requestParams = {}) => {
  return await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${endpoint}`, {
    ...requestParams,
    headers: {
      "Content-Type": "application/json",
      ...(requestParams.headers || {}),
    },
  });
};
export default apiFetch;
