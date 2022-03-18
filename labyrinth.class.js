var CELL_SIZE = 40;

var x_start = 0;
var y_start = 0;

var x_end = 5;
var y_end = 3;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];
}

function printConsole(){
    for (let i=0; i<this.map.length; i++){
        var line = "";
        for (let j=0; j<this.map[i].length; j++){
            if (this.map[i][j] == 1){
                line += "*"
            }
            else{
                line += " "
            }
        }
        console.log(line)
    }
}

function printDisplay(id){
    for (let i=0; i<this.map.length; i++){
        for (let j=0; j<this.map[i].length; j++){
            var newBox = document.createElement("div");
            newBox.style.width = CELL_SIZE+'px';
            newBox.style.height = CELL_SIZE+'px';
            newBox.style.float = 'left';
            if (this.map[i][j] == 1){
                newBox.style.backgroundColor = 'grey'
            }
            else if (j == x_end && i==y_end){
                newBox.style.backgroundColor = "yellow"
            }
            else{
                newBox.style.backgroundColor = "white"
            }
            id.appendChild(newBox)
        } 
    }
}
/* TODO implement core labyrinth functionality here */
