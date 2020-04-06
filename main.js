var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

var squares = document.querySelectorAll('.square');
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor;



for (i = 0; i < squares.length; i++) {
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    // add click listeners 
    squares[i].addEventListener("click", function() {
        //grab of clicked square and compare
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            alert("Correct!");
        } else {
            alert("WRONg!");
        }

    });
}