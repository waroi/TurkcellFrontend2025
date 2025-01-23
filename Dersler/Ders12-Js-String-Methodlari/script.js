// String Methodları

let value;
const firstName = "Varol";
const lastName = "Maksutoğlu";
const age = 25;
const department = "Bilişim";

value = firstName + " " + lastName;

value = firstName + " ";

value += lastName;

value = firstName.length;
value = firstName.toLocaleLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName.indexOf("a");
// value = firstName.includes("g");
value = firstName.slice(0, 2);
value = firstName.concat(" ", lastName, " ", age);

value =
  "İsim: " +
  firstName +
  "\nSoyisim: " +
  lastName +
  "\nYaş: " +
  age +
  "\nDepartman: " +
  department;

// Template Literal
value = `  İsim: ${firstName}
  Soyisim: ${lastName}
  Yaş: ${age}
  Departman: ${department}`;

value = `<ul>
  <li>İsim: ${firstName}</li>
  <li>Soyisim: ${lastName}</li>
  <li>Yaş: ${age}</li>
  <li>Bölüm: ${department}</li>
</ul>`;

value = prompt("Lütfen bir değer giriniz: ");

document.body.innerHTML = value;

console.log(value);
