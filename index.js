const circle = document.querySelectorAll('.heart');
const heart = document.querySelectorAll('.redHeart');

heart.forEach( (element) => {
    element.addEventListener('click', redHeart);
})

function redHeart () {
    this.classList.toggle('offer__redHeart');
}



