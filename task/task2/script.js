// task1

// v1 id ile 
const hello = document.getElementById("navbar");
console.log(hello);
// v2 class ile 
const head = document.querySelector(".head");
console.log(head);

// task2

// v1 class ile (queryselector) 
const span = document.querySelectorAll(".header");
console.log(span);
// v1 name ile 
const input = document.querySelectorAll("input");
console.log(input);

// task3

// v1 property kimi alert
function showAlert() {
    alert('Hi')
}
// v2 addEventListener kimi 
const readBtn = document.querySelector(".readme");
readBtn.addEventListener("click", function () {
    alert('Hello Murad')
})

// task4

// add elemek 
const addBtn = document.querySelector(".addbtn");
const disCont = document.querySelector(".container");
addBtn.addEventListener("click", function () {
    const newDiv = document.createElement("div");
    newDiv.classList.add("new-item");
    disCont.appendChild(newDiv);
})

// task5 

// innerHTML ile sekil elave et 
const showImg = document.querySelector(".images");
const newImg = document.createElement("img");
newImg.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkbFuj-0xH_HgLUpqt7P9SykEG3AEuZ3mDw&s");
showImg.appendChild(newImg);

// slider task 

