var contactMeBtn = document.getElementById("contactMeBtn");

contactMeBtn.addEventListener(
  "click",
  () => {
    window.location.href = "mailto:chinthakaprasad30@gmail.com";
  },
  "_blank"
);

let viewCvBtn = document.getElementById("viewCv");

viewCvBtn.addEventListener("click", () => {
  const pdfUrl = "src/js.png";
  window.open(pdfUrl, "_blank");
});

document.getElementById("email").onclick = () => {
  window.open("mailto:chinthakaprasad30@gmail.com", "_blank");
};

document.getElementById("gitHub").onclick = () => {
  window.open("https://github.com/ChinthakaPrasad?tab=repositories", "_blank");
};

document.getElementById("stackOverFlow").onclick = () => {
  window.open(
    "https://stackoverflow.com/users/22200258/chinthaka-prasad-wijerathna",
    "_blank"
  );
};

document.getElementById("linkdin").onclick = () => {
  window.open(
    "https://www.linkedin.com/in/chinthaka-prasad-wijerathna-85b354167/",
    "_blank"
  );
};


