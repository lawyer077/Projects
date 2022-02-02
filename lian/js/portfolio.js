let photoBig = document.getElementsByClassName("show");
let photoSmall = document.getElementsByClassName("select-img");
let textAnimation = document.getElementsByClassName("text-show");
let btnNext = document.getElementById("btn-n");
let btnPrev = document.getElementById("btn-p");
let countsmall = 0;
let countbig = 0;
let countText = 0;
let small1Active = function () {

    if(countsmall <= photoSmall.length -2) {
        photoSmall[countsmall].classList.remove('select-img-active');
        countsmall = countsmall +1;
        photoSmall[countsmall].classList.toggle('select-img-active');
    }
    else
    {
        photoSmall[countsmall].classList.remove('select-img-active');
        countsmall = 0;
        photoSmall[countsmall].classList.toggle('select-img-active');
    }

};
let big1Active = function (){
    if(countbig <= photoBig.length -2) {
        photoBig[countbig].classList.remove('show-active');
        countbig = countbig +1;
        photoBig[countbig].classList.toggle('show-active');
    }
    else
    {
        photoBig[countbig].classList.remove('show-active');
        countbig = 0;
        photoBig[countbig].classList.toggle('show-active');
    }

};

let small2Active = function () {

    if(countsmall > 0) {
        photoSmall[countsmall].classList.remove('select-img-active');
        countsmall = countsmall -1;
        photoSmall[countsmall].classList.add('select-img-active');
    }
    else
    {
        photoSmall[countsmall].classList.remove('select-img-active');
        countsmall = photoSmall.length-1;
        photoSmall[countsmall].classList.add('select-img-active');
    }

};
let big2Active = function (){
    if(countbig > 0) {
        photoBig[countbig].classList.remove('show-active');
        countbig = countbig -1;
        photoBig[countbig].classList.add('show-active');
    }
    else
    {
        photoBig[countbig].classList.remove('show-active');
        countbig = photoBig.length-1;
        photoBig[countbig].classList.add('show-active');
    }
};
let textActive = function () {
    if(countText <= textAnimation.length -2) {
        textAnimation[countText].classList.remove('text-active');
        countText = countText +1;
        textAnimation[countText].classList.add('text-active');
    }
    else
    {
        textAnimation[countText].classList.remove('text-active');
        countText = 0;
        textAnimation[countText].classList.add('text-active');
    }
};
let textTwoActive = function () {
    if(countText > 0) {
        textAnimation[countText].classList.remove('text-active');
        countText = countText -1;
        textAnimation[countText].classList.add('text-active');
    }
    else
    {
        textAnimation[countText].classList.remove('text-active');
        countText = textAnimation.length-1;
        textAnimation[countText].classList.add('text-active');
    }
};
btnNext.onclick = function () {
    big1Active();
    small1Active();
    textActive();
};
btnPrev.onclick = function () {
    big2Active();
    small2Active();
    textTwoActive();
};

let socialBtn = document.getElementsByClassName("shared-btn");
let socialSlide = document.getElementsByClassName("social-icons");



for (let i in socialBtn) {
    socialBtn[i].onclick = function () {
            if (socialSlide[i].classList.contains('slideRight')) {
                socialSlide[i].classList.remove('slideRight');
                socialSlide[i].classList.add('sliderLeft');
            } else {
                socialSlide[i].classList.remove('sliderLeft');
                socialSlide[i].classList.add('slideRight');
            }
        }
    }
