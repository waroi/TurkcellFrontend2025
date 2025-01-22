//String Methods
let value;
const firstName="Beyza";
const lastName="Sarıdaş";
const age=24;
const department="Bilişim";

value=firstName+ " " + lastName+ "" + age

value=firstName.length;
value=firstName.toLocaleLowerCase();
value=lastName.toLocaleUpperCase();
value=firstName[firstName.length-1];
value=lastName.indexOf("a");
value=firstName.includes("a");//true
value=firstName.includes("i");//false 0 dönmez
value=firstName[0];
value=firstName.slice(0,2);//parçalama
value=firstName.concat(" ",lastName, " ",age);

value="isim:" +firstName + "\nSoyisim" + lastName;//template literal kullan bunun yerine

//template literal
value=`
İsim:${firstName}
Soyisim: ${lastName}`;


value=`
<ul>
<li>İsim:${firstName}</li>
<li>Departman:${department}</li>
</ul>`;

document.body.innerHTML=value;

console.log(value);

deger=prompt("değer gir")
console.log(deger);