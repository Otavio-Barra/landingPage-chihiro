const btnTrailer = document.querySelector(".trailer");
const btnClose = document.querySelector(".close");
const video = document.getElementById("video");
const box = document.querySelector(".box");
const linkVideo = video.src;

function switchBox() {
  box.classList.toggle("actived");
}

btnTrailer.addEventListener("click", () => {
  switchBox();
  video.setAttribute("src", linkVideo);
});

btnClose.addEventListener("click", () => {
  switchBox();
  video.setAttribute("src", "");
});
