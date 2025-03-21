export default function selectMap(array) {
  return array.map((string, index) => (
    <option
      key={index}
      value={string.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve")}
    >
      {string}
    </option>
  ));
}

export function oneOfMap(array) {
  return array.map((string) =>
    string.toLowerCase().replaceAll(" ", "-").replaceAll("&", "ve")
  );
}
