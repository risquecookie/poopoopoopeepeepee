const passwords = [
  "I am the one who knocks",
  "i am the one who knocks",
  "Duffle bag",
  "duffle bag",
  "Duffle",
  "duffle", // Comment corrected (comma was missing)
  "Duffle bags",
  "Duffle Bags",
  "duffle bags"
]; // Array of accepted passwords

function checkPassword() {
  const guess = document.getElementById("passwordInput").value;
  const resultDisplay = document.getElementById("result");
  const audio = document.getElementById("myAudio"); // Get the audio element

  if (passwords.includes(guess)) {
    resultDisplay.textContent = "Congratulations! You may now open your present!";
    audio.controls = true; // Enable controls when password is correct
    audio.play();
  } else {
    resultDisplay.textContent = "Incorrect password. Try again!";
  }
}
