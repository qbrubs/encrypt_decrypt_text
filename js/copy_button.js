const copy = document.querySelector(".btn-copy")

//function that makes the copy button works
function copyText(){
    navigator.clipboard.writeText(exit.textContent)
    alert("The text was copied :)"); //alerts user that text has been copied
    document.location.reload(true); 

        copied.classList.add("showbutton");
        inputText.value = "";
}