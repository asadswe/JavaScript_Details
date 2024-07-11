const button = document.getElementById('myButton');

function handler1() {
    const output = document.getElementById('output');
    output.textContent = 'Button was clicked using onclick!';
}

function handler2() {
    const output = document.getElementById('output');
    output.textContent = 'This is a different handler using onclick!';
}
button.onclick = handler1;
button.onclick = handler2;