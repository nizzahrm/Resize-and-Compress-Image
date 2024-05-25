const uploadBox = document.querySelector(".upload-box"),
previewImg = uploadBox.querySelector("#preview-img"),
fileInput = uploadBox.querySelector("#file-input"),
widthInput = document.querySelector(".width input"),
heightInput = document.querySelector(".height input"),
ratioInput = document.querySelector(".ratio input");

let ogImageRatio;

const loadFile = (e) => {
    const file = e.target.files[0]; // getting first user selected file
    if(!file) return; // return if user hasn't selected any file
    previewImg.src = URL.createObjectURL(file); // passing selected file url to preview img src
    previewImg.style.display = "block"; // display the preview image
    previewImg.addEventListener("load", () => {
        widthInput.value = previewImg.naturalWidth;
        heightInput.value = previewImg.naturalHeight;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;

        document.querySelector(".wrapper").classList.add("active");
    });
    
}

widthInput.addEventListener("keyup", ()=>{
    //getting height according to the ratio checkbos status
    const height = ratioInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);
});

heightInput.addEventListener("keyup", ()=>{
    //getting width according to the ratio checkbos status
    const width = ratioInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
});



fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());
