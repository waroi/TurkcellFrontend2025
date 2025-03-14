export const myLoader = (src) => {
  return src;
};
export const filterStrings = (array, key, filterValue) => {
  return array.filter(
    (item) =>
      typeof item[key] === "string" &&
      item[key].toLowerCase().includes(filterValue.toLowerCase())
  );
};
