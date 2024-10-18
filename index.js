
// Get references to the input and p elements
const myInput = document.getElementById('myInput');
const myP = document.getElementById('myP');

// Add an event listener for the input event
myInput.addEventListener('input', (event) => {
    // Update the text of the p element with the input's value
    myP.textContent = event.target.value;
});