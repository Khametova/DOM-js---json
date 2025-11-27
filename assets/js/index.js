"use strict";

const dogImg_URL = "https://dog.ceo/api/breeds/image/random";

function getDog() {
  fetch(dogImg_URL)
    .then((response) => response.json())
    .then((data) => updateImg(data));
}

function updateImg(imgData) {
  const imgDataEl = document.getElementById("dogImg");
  imgDataEl.src = imgData.message;
}

getDog();
const btnEl = document.querySelector("#btnImg");

btnEl.onclick = getDog;
