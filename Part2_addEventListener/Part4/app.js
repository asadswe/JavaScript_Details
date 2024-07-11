// Get the button element by its ID
const button = document.getElementById('myButton');

function handler1() {
    const output = document.getElementById('output');
    output.textContent = 'First handler using addEventListener!';
}

function handler2() {
    const output = document.getElementById('output');
    output.textContent = 'Second handler using addEventListener!';
}

// Add multiple event listeners
button.addEventListener('click', handler1);
button.addEventListener('click', handler2);

// Optionally, to remove an event listener
button.removeEventListener('click', handler2);