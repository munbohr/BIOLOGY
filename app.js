const title = document.querySelector(".center-contents h1")

const handleClick = {
    hover: function() {
        title.innerText = " 이상으로 발표를 마치도록 하겠습니다";
        title.style.fontSize = "50px";
        title.classList.toggle = "응애";
        console.log(title);
        title.style.color = "skyblue";

        
    }

}

title.addEventListener("click", handleClick.hover);