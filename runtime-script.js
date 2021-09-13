var darkModeEnabled = 0;
function secureText() {
    console.log("Function Started");
    if (document.getElementById("Input-Secure-Text-Entry").value = true) {
        document.getElementById("Text_Area-Input").type = "password";
    }
    else if (document.getElementById("Input-Secure-Text-Entry").value = false) {
        document.getElementById("Text_Area-Input").type = "text";        
    }
}
function switchMode() {
    if (darkModeEnabled == 0) {
        console.log(darkModeEnabled);
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#FFFFFF";
        document.getElementById("Text_Area-Input").style.backgroundColor = "#292929";
        document.getElementById("Text_Area-Input").style.color = "#FFFFFF";
        document.getElementById("Input-Change-Theme").innerHTML = "Switch to Light Mode";
        darkModeEnabled = 1;
        console.log("New Status:" + darkModeEnabled);
        return
    }
    else if (darkModeEnabled == 1) {
        console.log(darkModeEnabled);
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        document.getElementById("Text_Area-Input").style.backgroundColor = "#FFFFFF";
        document.getElementById("Text_Area-Input").style.color = "#000000";
        document.getElementById("Input-Change-Theme").innerHTML = "Switch to Dark Mode";
        darkModeEnabled = 0;
        console.log("New Status:" + darkModeEnabled);
        return
    }
}
