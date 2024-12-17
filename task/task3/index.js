const mainImg = document.querySelector(".img0");
const imgShow = document.querySelectorAll(".img1");

imgShow.forEach(function(img) {
    img.addEventListener("click", function() {
        mainImg.setAttribute("src", img.getAttribute("src"));
    });
});
