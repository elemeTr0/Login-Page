document.getElementById('login').addEventListener('click', function() {
    var container = document.querySelector('.logwin');
    if (container.style.display === 'block') {
        container.style.display = 'none';
    } else {
        container.style.display = 'block';
    }
});

console.clear();
Splitting();