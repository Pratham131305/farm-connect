document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners or logic for interactivity
    console.log('Platform Loaded');

    // Example: Display alert on game play button click
    document.querySelectorAll('.play-button').forEach(button => {
        button.addEventListener('click', function () {
            alert('Starting Game: ' + this.dataset.game);
        });
    });
});
