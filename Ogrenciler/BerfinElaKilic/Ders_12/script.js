// String

let value;
const firstName = "Varol";
const lastName = "Maksutoğlu";
const age = 24;
const department = "Bilişim";

value = firstName + " " + lastName;

value = firstName + " ";
value += lastName;

value = firstName.length;
value = firstName.toLocaleLowerCase();
value = firstName.toUpperCase();
value = firstName[0];
value = firstName[firstName.length -1];
value = firstName.indexOf('a');
value = firstName.includes('g');
value = firstName.slice(0,2);
value = firstName.concat(" ", lastName , " ", age);
value = "İsim: " + firstName + "\nSoyisim: " + "\nYaş: "+ age;

//Template Literal

