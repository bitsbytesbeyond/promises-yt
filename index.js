import { Image } from 'canvas';

// Assume you have a function to load an image and return a Promise
function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = (e) => reject(new Error(`Failed to load image at ${url}: ${e.message}`));
        img.src = url;
    });
}

// Example of images url
const imageUrls = [
    "1.png",
    "2.png",
    "3.png"
];
// Create an array to store loaded images
const images = [];

// async function to load the images
async function loadImages() {
    try {
        for (const imageUrl of imageUrls) {
            const img = await loadImage(imageUrl);
            images.push(img);
        }
        console.log("Images loaded");
        animate(); // Call the animation function once all images are loaded
    } catch (error) {
        console.error("There was an error loading images: ", error)
    }
}

// Function to perform some animation.
function animate() {
    console.log("Start animating");
    // Set the start position for the images:
    let x = 10;
    let y = 10;
    images.forEach((img) => {
        ctx.drawImage(img, x, y, 100, 100); // Draw image at x and y position with a width/height of 100
        x+= 120; // Increment the x position so that next image is drawn on the right
    })
}

loadImages().catch(console.log); // Start the image loading process
