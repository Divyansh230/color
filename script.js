const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body'); // Use querySelector instead of querySelectorAll

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const color = e.target.id; // Get the id of the clicked button, which is the color
        body.style.backgroundColor = color; // Set the background color of the body
    });
});
