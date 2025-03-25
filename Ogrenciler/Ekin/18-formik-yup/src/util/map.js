export function mapValue(value) {
  return value.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve");
}
