document.addEventListener("DOMContentLoaded", function() {
    // Get the image container
    var imageContainer = document.getElementById("image-container");

    // Array of image file names in the images folder
    var imageArray = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png',];

    // Check if there's a stored list of displayed images in local storage
    var displayedImages = JSON.parse(localStorage.getItem("displayedImages")) || [];

    // Filter out images that have already been displayed
    var remainingImages = imageArray.filter(function(image) {
        return !displayedImages.includes(image);
    });

    // If all images have been displayed, reset the displayed images list
    if (remainingImages.length === 0) {
        displayedImages = [];
    }
    // Re-populate the remaining images with the full image array
    remainingImages = [...imageArray];

    // Generate a random index to pick a random image from the remaining images
    var randomIndex = Math.floor(Math.random() * remainingImages.length);

    // Get the selected image from the remaining images
    var selectedImage = remainingImages[randomIndex];

    // Create an image element
    var imageElement = document.createElement("img");

    // Set the source of the image to the selected image
    imageElement.src = "objects/" + selectedImage;

    // Append the image element to the image container
    imageContainer.appendChild(imageElement);

    // Add the selected image to the displayed images list
    displayedImages.push(selectedImage);

    // Save the updated displayed images list to local storage
    localStorage.setItem("displayedImages", JSON.stringify(displayedImages));
});

function refreshPage(){
    window.location.reload();
}