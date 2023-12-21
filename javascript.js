var contactMeBtn = document.getElementById("contactMeBtn");

contactMeBtn.addEventListener('click', ()=>{
    window.location.href = "mailto:chinthakaprasad30@gmail.com";

}, _blank);

var viewCvBtn = document.getElementById("viewCv");

viewCvBtn.addEventListener('click', ()=>{
    const pdfUrl = 'src/ICM 104066 chinthaka prasad.pdf';
    window.open(pdfUrl, '_blank');

});