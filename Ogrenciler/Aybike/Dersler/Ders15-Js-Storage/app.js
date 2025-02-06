localStorage.setItem("name", "Aybike");

let name= Number(localStorage.getItem("name"));

console.log(name);
console.log(typeof name)

let users = ['varol', 'aybike', 'mehmet'];
sessionStorage.setItem("users", JSON.stringify(users));

let users2 = JSON.parse(sessionStorage.getItem("users"));
