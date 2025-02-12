

// function getTextFile() {
//     fetch("text.txt")
//     .then((response) => response.text())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
    
// }
// getTextFile();


function getJsonFile() {
    fetch("users.json")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
    
}
getJsonFile();