document.addEventListener("DOMContentLoaded", declareVars());

pixelCreatorLoop();

function declareVars() {
    //Establish variables
    // Ask user for width of etch-a-sketch in pixels
    xPixels = prompt("What would you like your etch-a-sketch resolution to be (max 1000)");
    // Set total window width
    windowWidth = 1000;
    // Calculate the width/height of a 'pixel' in px
    pixelDims = Math.floor(windowWidth/xPixels);
    // For future programming reference, calculate total 'loss' by rounding pixel size down
    pixelError = (((windowWidth / xPixels) - Math.floor(windowWidth / xPixels)) * xPixels);
    // Calculate the total 'pixel' count in the grid
    totalPixels = xPixels ** 2;
    // Calculate the total 'overage' of field compared to pixelDims x xPixels
    fieldOverage = windowWidth - (pixelDims * xPixels);
    windowWidth = windowWidth - fieldOverage;
    // Resize wrap section to match even multiple of pixel size
    resizeWrap(windowWidth);
};

function onMouseOver(event) {
    event.target.style.backgroundColor = "#282828";
};

// create mouse up/down tracking
let isMouseDown = false;
document.addEventListener("mousedown", () => (isMouseDown = true));
document.addEventListener("mouseup", () => (isMouseDown = false));

document.addEventListener("mousemove", (event) => {
    if (isMouseDown) {
        const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
        if (hoveredElement && hoveredElement.classList.contains("cell")) {
            hoveredElement.style.backgroundColor = "red";
        };
    };
});

function onMouseDown(event) {
    event.target.style.backgroundColor = "#CC2222";
};

function resizeWrap(windowWidth) {
    // Function to resize the field to exact dimensions of the pixels
    // Without this, higher resolution displays risk having uneven pixel wrap
    const wrap = document.querySelector("#wrap");
    wrap.style.maxwidth = `${windowWidth}px`
};

function pixelCreatorLoop() {
// Loop the pixel creator
    let n = 0;
    while (n < totalPixels) {
        addCell();
        n++;
    };
};

function addCell() {
    // Adds correct number of <div id="cell"> to the container
    console.log("cell count")
    const container = document.querySelector("#container");

    const pixel = document.createElement("div");
    pixel.classList.add("cell");
    pixel.style.width = `${pixelDims}px`
    pixel.style.height = `${pixelDims}px`

    pixel.addEventListener("mouseover", onMouseOver);
    pixel.addEventListener("mousedown", onMouseDown);

    container.appendChild(pixel);
    return;
};
