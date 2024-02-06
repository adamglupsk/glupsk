function disableHover(button) {
    var frDiv = button.closest('.fr');

    // Add a class to the "fr" div to disable hover effect
    frDiv.classList.add('disable-hover');

    // Remove the class after a delay (1 second in this example)
    setTimeout(function () {
        frDiv.classList.remove('disable-hover');
    }, 1000);
}
