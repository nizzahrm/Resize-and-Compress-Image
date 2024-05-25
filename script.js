const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("#preview-img"),
fileInput = uploadBox.querySelector("#file-input");

const loadFile = (e) => {
    const file = e.target.files[0]; // getting first user selected file
    if(!file) return; // return if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file); // passing selected file url to preview img src
    previewImg.style.display = "block"; // display the preview image
    previewImg.addEventListener("load", () => {
        document.querySelector(".wrapper").classList.add("active");
    });
    console.log(file);
}

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
