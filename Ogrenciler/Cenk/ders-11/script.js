var secretNumber = Math.floor(Math.random() * 100);
var isFound = true;
while (isFound) {
  userInput = prompt('Aklımdakı sayıyı tahmin et!');
  if (userInput < secretNumber) {
    console.log('Yukarı çık!');
  } else if (userInput > secretNumber) {
    console.log('Aşağı in!');
  } else if (userInput == secretNumber) {
    console.log('Doğru bildin!');
    isFound = false;
  } else {
    console.log('Number gir');
  }
}