const title = document.querySelector(".center-contents h1")
const img = document.querySelector("btn");
const imgForm = document.querySelector("#form button");
const imgFormImg = document.querySelector("#form img");
const Form = document.querySelector("#form");
imgFormImg.classList.add("hidden");


const handleClick = {
    hover: function() {
        title.innerText = " 이상으로 발표를 마치도록 하겠습니다";
        title.style.fontSize = "50px";
        title.classList.toggle = "응애";
        console.log(title);
        title.style.color = "skyblue";
    }

}

function handleClickImg(event) {
    event.preventDefault();
    imgForm.classList.add("hidden");
    if(imgFormImg === "hidden") {}
    imgFormImg.classList.toggle("appear")
}

title.addEventListener("click", handleClick.hover);
Form.addEventListener("submit", handleClickImg);