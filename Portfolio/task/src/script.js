const buttonFlash = document.querySelector(".btnFlash");
const buttonPiano = document.querySelector(".btnPiano")
const modalFlash = document.querySelector(".modalFlash");
const modalPiano = document.querySelector(".modalPiano");
const modalClosePiano = document.querySelector(".modalClosePiano");
const modalCloseFlash = document.querySelector(".modalCloseFlash");

buttonFlash.addEventListener("click", function modalOpen(){
    modalFlash.style.display = "inline-block";
});

buttonPiano.addEventListener("click", function modalOpen(){
    modalPiano.style.display = "inline-block";
});

modalClosePiano.addEventListener("click", function modalClose(){
    modalPiano.style.display = "none";
});

modalCloseFlash.addEventListener("click", function modalClose(){
    modalFlash.style.display = "none";
});
