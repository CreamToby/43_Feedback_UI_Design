const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

// ratings.forEach(rating => rating.addEventListener('click', ))

ratingsContainer.addEventListener('click', (e) => {
    // console.log(e.target);
    if(e.target.parentNode.classList.contains('rating')) {
        // console.log(e.target);
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
        // console.log(selectedRating);
    } 
})

sendBtn.addEventListener('click', () => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
})

function removeActive() {
    for(let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}
