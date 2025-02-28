export async function getWings(url = "http://localhost:3000/products/") {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("Veri alınamadı! Hata kodu: " + response.status);
  const data = await response.json();
  return data;
}
export async function getWing(id, url = "http://localhost:3000/products/") {
  const response = await fetch(url + id);
  if (!response.ok)
    throw new Error("Veri alınamadı! Hata kodu: " + response.status);
  const data = await response.json();
  return data;
}
export async function getFilteredWings(
  filters,
  url = "http://localhost:3000/products/"
) {
  const response = await fetch(
    url +
      "?color=" +
      filters.color +
      "&weight_gte=0&weight_lte=" +
      filters.weight +
      "&price_gte=0&price_lte=" +
      filters.price +
      "&type=" +
      filters.type
  );
  if (!response.ok)
    throw new Error("Veri alınamadı! Hata kodu: " + response.status);
  const data = await response.json();
  return data;
}
