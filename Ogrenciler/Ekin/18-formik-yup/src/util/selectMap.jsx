export function oneOfMap(array) {
  return array.map((string) =>
    string.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve")
  );
}
