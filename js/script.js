const images = ["♈️", "♉️", "♊️", "♋️", "♌️", "♍️", "♎️", "♏️", "♐️", "♑️", "♒️", "♓️"];

const ul = document.querySelector('.ul-slide');
const ul2 = document.querySelector('.ul-slide2');
const ul3 = document.querySelector('.ul-slide3');
const ul4 = document.querySelector('.ul-slide4');

images.forEach(image => {
    const li    = document.createElement('li');
    const li2    = document.createElement('li');
    const li3    = document.createElement('li');
    const li4    = document.createElement('li');

    li.classList.add('li-slide-image');
    li2.classList.add('li-slide-image2');
    li3.classList.add('li-slide-image3');
    li4.classList.add('li-slide-image4');

    li.append(image);
    li2.append(image);
    li3.append(image);
    li4.append(image);

    ul.appendChild(li);
    ul2.appendChild(li2);
    ul3.appendChild(li3);
    ul4.appendChild(li4);
});

/****************/
/* FIRST SLIDER */
/****************/
let x = 0, final = (images.length-3)*100;
document.querySelector('.previous').addEventListener('click', () => {
    const slider = document.querySelectorAll('.ul-slide li');
    if(x <= -final) return;
    x = x-100;
    slider.forEach(image => {
        image.style = `transform: translateX(${x}%);`;
     })
 });
document.querySelector('.next').addEventListener('click', () => {
    const slider = document.querySelectorAll('.ul-slide li');
    if(x >= 0) return;
    x = x+100;
    slider.forEach(image => {
        image.style = `transform: translateX(${x}%);`;
     })
 });

/*****************/
/* SECOND SLIDER */
/*****************/
const previous2 = document.querySelector('.previous2');
const next2 = document.querySelector('.next2');

previous2.addEventListener('click', (event) => {
    let liSlide = document.querySelector('.ul-slide2');
    liSlide.appendChild(liSlide.firstElementChild);
});
next2.addEventListener('click', (event) => {
    let liSlide = document.querySelector('.ul-slide2');
    liSlide.insertBefore(liSlide.lastElementChild, liSlide.firstElementChild);
});

/****************/
/* THIRD SLIDER */
/****************/
const previous3 = document.querySelector('.previous3');
const next3 = document.querySelector('.next3');

let interval1, interval2;

previous3.addEventListener('click', (event) => {
    clearInterval(interval2);
    interval1 = setInterval(function(){
        let liSlide = document.querySelector('.ul-slide3');
        liSlide.appendChild(liSlide.firstElementChild);
     },1000);
});
next3.addEventListener('click', (event) => {
    clearInterval(interval1);
    interval2 = setInterval(function(){
        let liSlide = document.querySelector('.ul-slide3');
        liSlide.insertBefore(liSlide.lastElementChild, liSlide.firstElementChild);
     },3000);
});

/*****************/
/* FOURTH SLIDER */
/*****************/
let previous4 = document.querySelector('.previous4');
let next4 = document.querySelector('.next4');

let interval3, interval4;

window.onload = function(){
    function launch(){
        interval3 = setInterval(function(){
            let liSlide = document.querySelector('.ul-slide4');
            liSlide.appendChild(liSlide.firstElementChild);
         },2000);
    }
    launch();

    previous4.addEventListener('click', (event) => {
        clearInterval(interval3);
    });
    next4.addEventListener('click', (event) => {
        launch();
    });
};