// const userName = 555;
// localStorage.setItem("name", userName);
// const nameFromLocalStorage = localStorage.getItem("name");
// console.log(nameFromLocalStorage);

const person = {
  name: "Hilal",
  quote: "I can",
  children: "1",
  langs: ["js", "turkish"],
};
localStorage.setItem("person", JSON.stringify(person));
const personFromStorage = localStorage.getItem("person");
console.log(personFromStorage, JSON.parse(personFromStorage));

const persons = ["gökkuşağı", "iklim", "yağmur"];
sessionStorage.setItem("persons", JSON.stringify(persons));
const personsFromStorage = sessionStorage.getItem("persons");
console.log(personsFromStorage, JSON.parse(personsFromStorage));
