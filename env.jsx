const fs = require("fs");
const path = require("path");

// Configurations
const WORDS_PER_MINUTE = 55; // Typing speed per word
const CHARS_PER_SECOND = (WORDS_PER_MINUTE * 5) / 60; // Roughly 5 characters per word
const DELAY_PER_CHAR = 1000 / CHARS_PER_SECOND;
const DELETE_PERCENTAGE = 0; // 10% of the text will be deleted each time

// Sample text to write, modify as needed
const File = `
# Image Scroll Animation. 
This is an animation created with the experimental features of CSS along with JavaScript. I have created it using Nextjs but you can also do it just using vanilla javascript. 

--- 
The Size or the scale of the image increases as the image comes into the view and decreases as soon as it goes out of the view, you can use it for various things like your portfolio with the images of work you have done or you want to show image reviews. 

The horizontal image view is created using various react and you can also customize it with the following properties. 

js
  const imageWidth = 60 //width of the image
  const imageGap = 10 // gap between images
  const startEndPadding = 15 //padding left and right of the images
  const containerWidth = totalImages * (imageWidth + imageGap) + 1.5 * startEndPadding // total horizontal width

<div className="relative h-[550vh]"> {/* select height with ratio to the speed you want if you select more
 height horizontal scroll will take more time and vice versa */}

<div className="sticky top-28 left-5 h-[calc(100vh-6rem)] overflow-hidden"> {/* top value for distance
 from top and the height here is height of the image */}

Hosted at => https://isa.theme-verse.com and https://isa.oneui.xyz

// Use gradient animation for this one component
`

const Text = File.split(""); // Splitting into characters

let isRunning = true;

async function typeEffect(filePath) {
    try {
        let content = ""; // start with an empty content

        while (isRunning) {
            // Simulate typing character by character
            for (const char of Text) {
                if (!isRunning) break;

                content += char;
                fs.writeFileSync(filePath, content); // write to file progressively
                process.stdout.write(char); // display in terminal
                await delay(DELAY_PER_CHAR);
            }

            if (!isRunning) break;

            // Delete a portion of the text once fully typed
            let charsToKeep = Math.floor(content.length * (1 - DELETE_PERCENTAGE));
            content = content.slice(-charsToKeep);
            fs.writeFileSync(filePath, content);
            console.log("\nDeleted a portion of the text...");

            // Wait a bit before starting the next cycle
            await delay(1000);
        }
    } catch (error) {
        console.error("Error during typing effect:", error);
    }
}

// Helper function to create delays
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start the typing effect
const filePath = path.join(__dirname, "./README.md");
console.log("Starting typing effect... Press CTRL+C to stop.");
typeEffect(filePath);

// Handle graceful exit
process.on("SIGINT", () => {
    console.log("\nStopping typing effect...");
    isRunning = false;
});
