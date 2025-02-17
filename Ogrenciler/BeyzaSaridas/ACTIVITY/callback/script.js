function funny(text){
   const output=`🥳${text}`;
   console.log(output);
}
funny("hey");
console.log("--------------------------------");
function fetchData(callback) {
   //asenkron yapım:setTimeout
   setTimeout(() => {
       const data = { id: 1, name: "Beyza" };
       callback(data); 
   }, 2000);
}
fetchData((data) => {
   console.log("Veri alındı:", data);
});