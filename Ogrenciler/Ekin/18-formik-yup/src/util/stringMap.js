export default function stringMap(string) {
  return string.replaceAll("-", " ").replaceAll(" ve ", " & ");
}
