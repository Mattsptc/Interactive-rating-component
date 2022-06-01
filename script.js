const ratings = document.querySelectorAll('.rating');
const button = document.querySelector('.submitRating');
const initial = document.querySelector('.content-1')
const thankYou = document.querySelector('.content-2');
const selectedRatingSpan = document.querySelector('.selected-rating');

ratings.forEach((rating) => {
    rating.addEventListener('click', function(event) {
    event.preventDefault();

    ratings.forEach((rating) => {
        rating.classList.remove('selected')
    })
    
    this.classList.add('selected')
    })

})

button.addEventListener('click', function (event) {
    event.preventDefault();

    const selectedRating = document.querySelector('.rating.selected');
    const selectedRatingValue =
        selectedRating !== null ? selectedRating.getAttribute('data-val') : 0;

    if (selectedRating === null) {
        alert('Please select a rating before clicking submit');
        return false;
    }

    initial.classList.add('hidden');
    selectedRatingSpan.innerHTML = selectedRatingValue;
    thankYou.classList.remove('hidden');
});