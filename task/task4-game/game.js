let count = 0;
let inc = 1;

const counter = document.getElementById('counter');
const img = document.querySelector('.img');
const lv1 = document.querySelector('.lv1');
const lv2 = document.querySelector('.lv2');
const lv3 = document.querySelector('.lv3');

img.addEventListener('click', function () {
    count = count + inc;
    counter.textContent = count;
    img.classList.add('animate');
    setTimeout(() => {
        img.classList.remove('animate');
    }, 300);
});
lv1.addEventListener('click', function () {
    if (count < 10) {
        alert("kasif");
        return;
    }
    inc += 1;
    count -= 10;
    counter.textContent = count;
});
lv2.addEventListener('click', function () {
    if (count < 20) {
        alert("kasif");
        return;
    }
    inc += 2;
    count -= 20;
    counter.textContent = count;
});
lv3.addEventListener('click', function () {
    if (count < 30) {
        alert("kasif");
        return;
    }
    inc += 5;
    count -= 30;
    counter.textContent = count;
});
