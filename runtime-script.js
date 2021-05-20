function secureText() {
    console.log("Function Started");
    if (document.getElementById("Input-Secure-Text-Entry").value = true) {
        document.getElementById("Text_Area-Input").type = "password";
    }
    else if (document.getElementById("Input-Secure-Text-Entry").value = false) {
        document.getElementById("Text_Area-Input").type = "text";        
    }
}