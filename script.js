let textArea = document.getElementById("editContainer");
let previewArea = document.getElementById("viewContainer");

function Update() {
    console.log(textArea.value);
    previewArea.innerHTML = textArea.value;
}
