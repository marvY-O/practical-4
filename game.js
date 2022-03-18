Labyrinth();

var mapDiv = document.getElementById("map");
mapDiv.style.width = (map[0].length*CELL_SIZE)+'px';
mapDiv.style.height = (map.length*CELL_SIZE)+'px';
mapDiv.style.border = '1px solid black';
mapDiv.style.position = 'absolute';

printDisplay(mapDiv);
mapDiv.style.display = "block";


var player = document.createElement("div");
player.style.width = CELL_SIZE+'px';
player.style.height = CELL_SIZE+'px';
player.style.backgroundImage = 'url(superman.png)';
player.style.backgroundRepeat = 'no-repeat';
player.style.backgroundPosition = 'center';
player.style.position = 'absolute';

player.style.left = (x_start*CELL_SIZE)+'px';
player.style.top = (y_start*CELL_SIZE)+'px';

gameOver = false;

mapDiv.appendChild(player);

document.onkeydown = checkKey;

function checkKey(e) {
    

    e = e || window.event;

    if (e.keyCode == '38') {//UP
        if (y_start-1>=0){
            if (map[y_start-1][x_start] == 0){
                y_start -= 1;
            }
        }
    }
    else if (e.keyCode == '40') {//DOWN
        if (y_start+1<map.length){
            if (map[y_start+1][x_start] == 0){
                y_start += 1;
            }
        }
    }
    else if (e.keyCode == '37') {//LEFT
        if (x_start-1>=0){
            if (map[y_start][x_start-1] == 0){
                x_start -= 1;
            }
        }
    }
    else if (e.keyCode == '39') {//RIGHT
        if (x_start+1<map[0].length){
            if (map[y_start][x_start+1] == 0){
                x_start += 1;
            }
        }
    }

    player.style.left = (x_start*CELL_SIZE)+'px';
    player.style.top = (y_start*CELL_SIZE)+'px';

    if (x_start == x_end && y_start == y_end){
        alert('Congratulations!');
    }
    

}







