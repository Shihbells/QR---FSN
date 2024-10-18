function generateQR() {
    document.querySelector("#qr-image").style.display = "block";
    let QRtext = document.querySelector("#text").value; // Corrected selector
    if (QRtext.trim().length == 0) {
        document.querySelector("#qr-image .error").innerHTML = "Please enter text"; // Corrected selector
        document.querySelector("#img").style.display = "none";
    } else {
        document.querySelector("#img").style.display = "block";
        document.querySelector("#qr-image .error").innerHTML = ""; // Corrected selector
        document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=" + encodeURIComponent(QRtext);
    }
}