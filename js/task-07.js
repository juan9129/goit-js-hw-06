const fontSizeControl = document.getElementById("font-size-control");

fontSizeControl.addEventListener("input", function () {
text.style.fontSize = this.value + "px";
})