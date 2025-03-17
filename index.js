document.getElementById('login').addEventListener('click', function() {
    var logContainer = document.querySelector('.logwin');
    var regContainer = document.querySelector('.regwin');

    logContainer.style.display = logContainer.style.display === 'block' ? 'none' : 'block';
    regContainer.style.display = 'none';
});

document.getElementById('reg').addEventListener('click', function() {
    var regContainer = document.querySelector('.regwin');
    var logContainer = document.querySelector('.logwin');

    regContainer.style.display = regContainer.style.display === 'block' ? 'none' : 'block';
    logContainer.style.display = 'none';
});

