$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    });



});

const cards = document.querySelectorAll('.benefits__cart');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
};
function startRotate(event) {
    const cardItem = this.querySelector('.card__body');
    const halfHeight = cardItem.offsetHeight / 2;

    cardItem.style.transform = 'rotateX(' + - (event.offsetY - halfHeight) / 3.5 + 'deg) rotatey(' + (event.offsetX - halfHeight) / 3.5 +'deg)';
};
function stopRotate(event) {
    const cardItem = this.querySelector('.card__body');
    const halfHeight = cardItem.offsetHeight / 2;

    cardItem.style.transform = 'rotateX(0)';
}


const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const btnToTop = document.querySelector('.btnToTop');
window.onscroll = () =>  {
    if (window.scrollY > 400) {
        btnToTop.classList.remove('btnToTop_show');
    } else {
        btnToTop.classList.add('btnToTop_show');
    }
}
