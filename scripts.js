// document.addEventListener("DOMContentLoaded", );


// Create/assign event for button click
const handleButtonClick = (event) => {
    let target = event.target.innerText;

    if (target == "Click here to create a field") {
        startButton();
    };
};

createField.addEventListener("click", handleButtonClick);


function startButton() {
    varsOut = declareVars();
    resizeWrap(varsOut.windowWidth);
    pixelCreatorLoop(varsOut.totalPixels, varsOut.pixelDims);
}

function declareVars() {
    //Establish variables
    // Ask user for width of etch-a-sketch in pixels
    let xPixels = prompt("Desired screen X/Y resolution? (max 1000)");
    // Set total window width
    let windowWidth = 1000;
    // Calculate the width/height of a 'pixel' in px
    let pixelDims = Math.floor(windowWidth / xPixels);
    // Calculate the total 'pixel' count in the grid
    let totalPixels = xPixels ** 2;

    const varsOut = {
        "windowWidth": windowWidth,
        "pixelDims": pixelDims,
        "totalPixels": totalPixels
    };
    
    return varsOut;
};

function resizeWrap(windowWidth) {
    // Function to resize the field to exact dimensions of the pixels
    // Without this, higher resolution displays risk having uneven pixel wrap
    const wrap = document.querySelector("#wrap");
    wrap.style.maxwidth = `${windowWidth}px`
};

function mouseTracker() {
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
};

function onMouseOver(event) {
    event.target.style.backgroundColor = "#282828";
};

function onMouseDown(event) {
    event.target.style.backgroundColor = "#CC2222";
};

function pixelCreatorLoop(totalPixels, pixelDims) {
// Loop the pixel creator
    let n = 0;
    while (n < totalPixels) {
        addCell(pixelDims);
        n++;
    };
};

function addCell(pixelDims) {
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
