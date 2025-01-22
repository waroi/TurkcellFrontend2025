var secretNumber = Math.floor(Math.random() * 100);
var isFound = false;
var numberText = document.querySelector('.secret-number');
while (!isFound) {
  var userInput = window.prompt('Aklımdaki sayıyı tahmin et!');
  if (userInput < secretNumber) {
    console.log('Yukarı çık!');
  } else if (userInput > secretNumber) {
    console.log('Aşağı in!');
  } else if (userInput == secretNumber) {
    console.log('Doğru bildin!');
    isFound = true;
  } else {
    console.log('Number gir');
  }
}
if (isFound) {
  numberText.innerHTML = userInput;
}
