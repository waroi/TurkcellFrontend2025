// String Methodları

let value;
const firstName = "Fahri";
const lastName = "Coşkun";
const age = 25;
const department = "Bilişim";

// value = firstName + " " + lastName;

value = firstName + " ";
value += lastName;

value = firstName.length;
value = firstName.toLowerCase();
value = firstName.toUpperCase();
value = firstName[0]; // 0.indexli verir
value = firstName[firstName.length - 1];
value = firstName.indexOf("h"); // 1 veya -1 döner
value = firstName.includes("f"); // true false döner
value = firstName.slice(0, 2); // 0 dan al 2.indexe kadar
value = firstName.concat(" ", lastName, " ", age); // birleştirme işlemi
value =
  "İsim: " +
  firstName +
  "\n" +
  "Soyisim: " +
  lastName +
  "\nYaş: " +
  age +
  "\nDepartment: " +
  department;

//! Template Literal
value = `
İsim: ${firstName}
Soyisim: ${lastName}
Yaş: ${age}
Departman: ${department}`;

value = `
<ul>
<li>İsim: ${firstName}</li>
<li>Soyisim: ${lastName}</li>
<li>Yaş: ${age}</li>
<li>Departman: ${department}</li>
</ul>`;

document.body.innerHTML = value;

console.log(value);
