const fetchService = async (url, method = "GET", body = null, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const requestOptions = {
    method,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
    body: body ? JSON.stringify(body) : null,
    ...options,
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(
        `'İlan detayları yüklenirken bir hata oluştu': ${response.status}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("İlan detayları yüklenirken bir hata oluştu: ", error);
    throw error;
  }
};
export default fetchService;
