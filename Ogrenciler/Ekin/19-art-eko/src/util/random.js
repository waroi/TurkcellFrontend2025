export function shuffle(array, index, random) {
  index = array.length;

  while (index != 0) {
    random = Math.floor(Math.random() * index);

    index--;

    [array[index], array[random]] = [array[random], array[index]];
  }

  return array;
}
