export const fetch = async (url, query) => {
  const response = await fetch(`${url}${query}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
};
