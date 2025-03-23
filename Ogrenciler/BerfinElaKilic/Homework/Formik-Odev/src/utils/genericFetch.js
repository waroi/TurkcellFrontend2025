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
      console.log(
        "İlan detayları yüklenirken bir hata oluştu",
        response.status
      );
      return;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("İlan detayları yüklenirken bir hata oluştu: ", error);
    return;
  }
};
export default fetchService;
