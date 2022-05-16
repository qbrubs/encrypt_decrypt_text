//the encrypter/decrypter only changes vogal and only works with lower case

//vogals that will change:
// "a" to "ai"
// "e" to "enter"
// "i" to "imes"
// "o" to "ober"
// "u" to "ufat"

const inputText = document.querySelector("#textarea"); //encrypter/decrypter value
const exit = document.querySelector ("#result"); //where is going to show the result of the encrypt/decrypt
const resultText = document.querySelector(".resultText");

var button1 = document.querySelector(".btn-encrypt");
button1.onclick = encrypter;

var button2 = document.querySelector(".btn-decrypt");
button2.onclick = decrypter;

//this function make the text and image of the result area disappear when the encrypt/decrypt button are clicked
function hideScreen() {
    var screen = document.getElementById("resultText");
    
    screen.style.display = "none";
}

//encrypter function -- the letters "a" and "e" needs to be in this position to work
function encrypter() {
    hideScreen();
    if (inputText.value !="") {

        textEncrypted = inputText.value.replace(/e/g, "enter");
        textEncrypted = textEncrypted.replace(/i/g, "imes");
        textEncrypted = textEncrypted.replace(/a/g, "ai");
        textEncrypted = textEncrypted.replace(/o/g, "ober");
        textEncrypted = textEncrypted.replace(/u/g, "ufat");

        exit.textContent = textEncrypted;
        inputText.value = "";
        exit.lupa="none";

    }
}

//decrypter function -- the letters "a" and "e" needs to be in this position to work
function decrypter() {
    hideScreen();
    if(inputText.value !="") {
        textDecrypted = inputText.value.replace(/enter/g, "e");
        textDecrypted = textDecrypted.replace(/imes/g, "i");
        textDecrypted = textDecrypted.replace(/ai/g, "a");
        textDecrypted = textDecrypted.replace(/ober/g, "o");
        textDecrypted = textDecrypted.replace(/ufat/g, "u");

        exit.textContent = textDecrypted;
        inputText.value = "";
        exit.lupa="none";

    }
}
