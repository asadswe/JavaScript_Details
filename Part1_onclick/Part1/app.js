// Get the button element by its ID
const button = document.getElementById('myButton');

// Assign an onclick event handler
button.onclick = function() {
    const output = document.getElementById('output');
    output.textContent = 'Button was clicked using onclick!';
};

// This will overwrite the previous onclick handler
button.onclick = function() {
    const output = document.getElementById('output');
    output.textContent = 'This is a different handler using onclick!';
};