function initGrid() {
    // collect colors in an array
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }

    var selected = document.getElementById("selected");
    var colors_div = document.getElementById("colors");
    
    for(let i=0; i<colors.length; i++){
        var box = document.createElement("div");
        box.className = "choice";
        box.style.backgroundColor = colors[i];
        colors_div.appendChild(box)
    }

    var colored_boxes = colors_div.getElementsByClassName("choice");


    
    for (let i=0; i<colored_boxes.length; i++){
        colored_boxes[i].onclick = function(){
            selected.style.backgroundColor = colored_boxes[i].style.backgroundColor;
            selected.innerHTML = colored_boxes[i].style.backgroundColor;
        }
    }

}

window.onload = function () {
    initGrid();
}
