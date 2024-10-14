
document.addEventListener("DOMContentLoaded", function() {

    const boxContainer = document.getElementById('box-container');
    const newBoxButton = document.getElementById('new-box-button');
    const colorInput = document.getElementById('color-input');
    const colorForm = document.getElementById('color-form');

    let boxColor = null;
    let boxIdCounter = 0;

    colorForm.addEventListener('submit', function(event) {
        event.preventDefault(); // prevent form submission

        const newColor = colorInput.value.trim(); // get the value from color input

        // Set the color to all boxes
        const boxes = document.querySelectorAll('.box');
        for (const box of boxes) {
            box.style.backgroundColor = newColor;
        }

        // Reset the input and store new color
        colorInput.value = ""; 
        boxColor = newColor;

    });

    function addNewBox() {

       
        const newBox = document.createElement('div'); // Create a new box
        newBox.className = 'box';

       
        newBox.id = `Box-${boxIdCounter}`;  // Set the box ID as content & use counter for unique ID
        newBox.textContent = `Box ${boxIdCounter}`;

        
        newBox.style.backgroundColor = boxColor; // Set the background color from the boxColor variable

        
        newBox.setAttribute('data-box-id', boxIdCounter.toString()); // Set the Box ID to a data attribute

        
        boxContainer.appendChild(newBox); // Append to box container element as its child

        boxIdCounter++;  // Increment the counter for the next box
    };

    newBoxButton.addEventListener('click', function() {
        addNewBox();
    });

    document.addEventListener('dblclick', function(event) {
        if(event.target.classList.contains("box")) {
            event.target.remove(); // remove clicked box
        }
    });

    document.addEventListener('mouseover', function(event) {
        if(event.target.classList("box")) {  // Change display text to display
            event.target.textContent = `X Coordinate: ${event.pageX}, Y coordinate: ${event.pageY}`
        }
        
    });

    document.addEventListener('mouseout', function(event) {
        if(event.target.classList("box")) {
            
            const boxId = event.target.getAttribute("data-box-id"); // ignore original text using box ID from data attribute
            event.target.textContent = `Box ID: ${boxId}`;
        }
    });

    window.addEventListener('keydown', function(event) {

        if(event.target.id === "color-input") { // ignores keypresses for color input
            return;        
        }

        if(event.key === "n" || event.key === "N") { // add new box when n key is pressed
            addNewBox(); // add a new box
        }
    })

});

