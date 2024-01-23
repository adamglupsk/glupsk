// Store the original width
var originalWidth = '60px';

var frDiv = document.querySelector('.fr');

document.getElementById('Close').addEventListener('click', function () {
    // Change the width
    frDiv.style.width = '480px';

    // Log a message to the console when changing the width
    console.log('Width changed to 480px');

    // Reset the width after a delay (adjust as needed)
    setTimeout(function () {
        frDiv.style.width = originalWidth;

        // Log a message to the console when resetting the width
        console.log('Width reset to original');
    }, 200); // 1000 milliseconds = 1 second (adjust as needed)
});

// Add delayed event listener to handle hover effect after resetting the width
setTimeout(function () {
    frDiv.addEventListener('mouseover', function () {
        // Reset the inline style to allow :hover to work again
        this.style.width = '';
    });
}, 6000); // 500 milliseconds delay (adjust as needed)