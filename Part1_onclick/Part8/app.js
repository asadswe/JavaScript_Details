function fetchData() {
    fetch('https://api.example.com/items')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}