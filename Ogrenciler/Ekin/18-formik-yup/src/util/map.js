export function mapValue(value) {
  return value.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve");
}

export function mapOneOf(array) {
  return array.map((string) =>
    string.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve")
  );
}

export function mapString(string) {
  return string.replaceAll("-ve-", "-&-").replaceAll("-", " ");
}
