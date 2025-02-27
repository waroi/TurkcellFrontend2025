//string methodları
let value;
const ad="Beyza";
const soyad="Cankurtaran";
const age=23;
const departmanet="bilişim";

value=ad+" "+soyad;
value=ad +" ";
value+=soyad;
value=ad.length;
value=ad.toLocaleLowerCase();
value=ad.toLocaleUpperCase();
value=ad[0];
value=ad[ad.length-1];
value=ad.indexOf("a");
value=ad.includes("a");//olmayan bir değerde -1 döner
value=ad.slice(0,2);
value=ad.concat(" ",soyad," ",age);

value=`İsim:${ad},
    Soyisin:${soyad},
    Yas:${age},
    Departman:${departmanet}
    `;

value=`<ul>
    <li>İsim:${ad}</li>,
    <li>Soyisin:${soyad}</li>,
    <li>Yas:${age}</li>,
    <li>Departman:${departmanet}</li>
    </ul>`;
console.log(value);
document.body.innerHTML=value;