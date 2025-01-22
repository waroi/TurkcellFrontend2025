//Script Methodları 

let value;
const firstName = "Zeynep";
const lastName = "Güney";
const age = 24;
const department = "Bilişim";

value = firstName + " " +  lastName;

value = firstName + " ";

value += lastName;

value = firstName.length;
value = firstName.toLocaleLowerCase();
value = firstName.toLocaleUpperCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[firstName.length - 1];
value = firstName.at(-1);
value = firstName.indexOf("e"); // ilk e yi verir
value = firstName.includes("a"); //false dönüyor yoksa
value = firstName.slice(0,2);
value = firstName.concat(lastName);
value = firstName.concat(" " +lastName + " " + age);

value = "İsim: " + 
firstName + 
"\nSoyisim: " +
lastName +
"\nYaş: " +
age;

value = `İsim: ${firstName}
Soyisim : ${lastName}
Yaş: ${age}
Departman: ${department};`

value = `<ul>
    <li>İsim: ${firstName}</li>
    <li>Soyisim: ${lastName}</li>
    <li>Yaş: ${age}</li>
    <li>Departman: ${department}</li>
</ul>`;

value = prompt("Lütfen bir değer girin: ");


document.body.innerHTML = value; 

console.log(value);

