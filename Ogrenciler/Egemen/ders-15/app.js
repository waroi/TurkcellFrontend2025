let userName = 444;


localStorage.setItem("name", userName);

let name = Number(localStorage.getItem("name"));


console.log(name);
console.log(typeof (name));
document.write(name);